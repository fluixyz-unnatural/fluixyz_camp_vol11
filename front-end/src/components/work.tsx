import React, { useState, useEffect } from "react";
import { Card, Image, Container } from "semantic-ui-react";
import Tag from "./tag";
import { db, fullpath2url } from "../firebase";
import { query, where, getDocs } from "firebase/firestore";

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
    setSrc(await fullpath2url(`images/thumbnail/${props.thumbnail}`));
    console.log(src);
  }, []);
  return (
    <Card>
      <Image src={src} />
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
  useEffect(async () => {
    const workss: Array<WorkCardProps> = [];
    await db
      .collection("works")
      .where("author", "==", "1172666a4bb492c1c628da391fe3cdde")
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
    <section style={{ marginTop: "64px" }}>
      <Container>
        <h2>作品カードサンプル</h2>
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
