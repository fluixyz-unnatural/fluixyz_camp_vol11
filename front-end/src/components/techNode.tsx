import React from "react";
import { Card } from "semantic-ui-react";
import Work from "./work";

export type CardProps = {
  name: string;
  key: number;
};

function TechNode(props: CardProps) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>React</Card.Header>
        <Card.Description>
          3大フロントエンドフレームワークの一つ。angularより優しくvueより硬い。
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Card.Header>関係するプロジェクト</Card.Header>
        {Work()}
      </Card.Content>
    </Card>
  );
}
export default TechNode;
