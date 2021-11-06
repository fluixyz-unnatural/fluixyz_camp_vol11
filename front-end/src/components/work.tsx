import React, { useState, useEffect } from "react";
import { Card, Image, Container } from "semantic-ui-react";
import Tag from "./tag";
import { db, fullpath2url } from "../firebase";
import { useAuthContext } from "../context/AuthContext";
import hash from "object-hash"

interface WorkCardProps {
  title: string;
  id: string;
  summary: string;
  techs: Array<string>;
  key: string | null;
  thumbnail: string;
}

const WorkCard = (props: WorkCardProps) => {
  console.log("workcard", props);
  const [src, setSrc] = useState("");
  useEffect(async () => {
    fullpath2url(`images/thumbnail/${props.thumbnail}`).then((src) =>
      setSrc(src)
    );
    console.log(src);
  }, []);
  return (
    <Card>
      <Image src={src} height="160px" />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.summary}</Card.Description>
      </Card.Content>
      <Card.Content>
        {props.techs.map((tag, index) => Tag({ name: tag, key: index }))}
      </Card.Content>
    </Card>
  );
};

function Work() {
  const [works, setWorks] = useState<WorkCardProps[]>([]);
  const { user }: any = useAuthContext();

  useEffect(async () => {
    const workss: Array<WorkCardProps> = [];
    await db
      .collection("works")
      .where("author", "==", hash.MD5(user.email))
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          workss.push({
            title: data.title,
            id: doc.id,
            summary: data.summary,
            techs: data.techs,
            key: doc.id,
            thumbnail: data.thumbnail,
          });
        });
      });
    console.log(workss);
    setWorks(workss);
  }, []);
  console.log(works);
  return (
    <section style={{ marginTop: "64px", minHeight: "84vh" }}>
      <Container>
        <h2>登録作品一覧</h2>
        <Card.Group>
          {works.map((param) => (
            <WorkCard
              key={param.id}
              title={param.title}
              id={param.id}
              summary={param.summary}
              techs={param.techs}
              thumbnail={param.thumbnail}
            />
          ))}
        </Card.Group>
      </Container>
    </section>
  );
}
export default Work;
