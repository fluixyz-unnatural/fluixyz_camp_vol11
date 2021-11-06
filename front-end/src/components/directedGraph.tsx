import React, { useState } from "react";
import data from "../sample/tags2.json";
import Tag from "../components/tag";

type NodeProps = {
  tag: string;
  parent: Array<string>;
  child: Array<string>;
};

const data2nodeParam = (tag: string): NodeProps => {
  const tmp: any = data.tags.find((elm) => elm.tag === tag);
  if (tmp === undefined) {
    const tg = {
      tag: tag,
      parent: getParent(tag),
      child: [],
    };
    console.log('missing', tag)
    return tg;
  }
  return { tag: tmp.tag, parent: getParent(tag), child: tmp.child };
};

const getParent = (tag: string): Array<string> => {
  const tmp = data.tags.filter((elm: any) => {
    return elm.child.includes(tag);
  });
  if (tmp === undefined) return [];
  return tmp.map((elm) => elm.tag);
};

function Node(props: NodeProps) {
  return (
    <div
      style={{
        width: "600px",
        backgroundColor: "rgb(250,250,255)",
        padding: "10px",
      }}
    >
      <h4>{props.tag}</h4>
      <div>
        <span
          style={{
            width: "50px",
            display: "inline-block",
            marginBottom: "10px",
          }}
        >
          parent:
        </span>
        {props.parent.map((tag, index) => Tag({ name: tag, key: index }))}
      </div>
      <div>
        <span style={{ width: "50px", display: "inline-block" }}>child:</span>
        {props.child.map((tag, index) => Tag({ name: tag, key: index }))}
      </div>
    </div>
  );
}

function DirectedGraph() {
  const [nodeNames, setNodes] = useState(["aws", "html"]);
  const handleClick = (e: any) => {
    if (!(e.target.className === "ui label")) return;
    const tmp = nodeNames.slice(0);
    tmp.push(e.target.innerText);
    setNodes(tmp);
  };
  return (
    <div onClick={handleClick}>
      {nodeNames.map((elm) => Node(data2nodeParam(elm)))}
    </div>
  );
}

export default DirectedGraph;
