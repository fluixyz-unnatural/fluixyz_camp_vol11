import React from "react";
import { Label } from "semantic-ui-react";

export type TagProps = {
  name: string;
};

function Tag(props: TagProps) {
  return <Label >{props.name}</Label>;
}
export default Tag;
