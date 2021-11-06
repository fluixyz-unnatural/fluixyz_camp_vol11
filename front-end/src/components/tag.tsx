import React from "react";
import { Label } from "semantic-ui-react";

export type TagProps = {
  name: string;
  key: number | string;
};

function Tag(props: TagProps) {
  return <Label key={props.key}>{props.name}</Label>;
}
export default Tag;
