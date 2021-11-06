import React from "react";
import { Header, Card, Image } from "semantic-ui-react";
import Tag from "./tag";

function Work() {
  const tags = ["aiueo", "ttt"];
  return (
    <section>
      <h2>作品カードサンプル</h2>
      <Card>
        <Image src="https://pbs.twimg.com/profile_banners/1117817856282882048/1599754844/1500x500" />
        <Card.Content>
          <Card.Header>title</Card.Header>
          <Card.Meta>popopopo</Card.Meta>
          <Card.Description>popopopopofdlafjkdalfejibijfea</Card.Description>
        </Card.Content>
        <Card.Content>
          {tags.map((tag, index) => Tag({ name: tag, key: index }))}
        </Card.Content>
      </Card>
    </section>
  );
}
export default Work;
