import "./gate.css";
import Node from "../tech-nodes/node";
import { WorksContext } from "./gate";
import { useContext } from "react";
import dependencies from "../../sample/tags3.json";

interface DepNode {
  label: string;
  parent: string;
}

const getDomainChildren = (parent: string): Array<DepNode> => {
  const childs: Array<any> = [];
  dependencies.forEach((e) => {
    if (e.domain && e.domain == parent) childs.push(e);
  });
  const childTree: Array<DepNode> = [];
  childs.forEach((e) => {
    if (e.type == "plugin") {
      childTree.push({ label: e.tag, parent: e.framework });
    } else if (e.type == "library") {
      childTree.push({ label: e.tag, parent: e.language });
    } else if (e.type == "framework") {
      childTree.push({ label: e.tag, parent: e.language });
    } else if (e.type == "language") {
      childTree.push({ label: e.tag, parent: parent });
    } else if (e.type == "web-api") {
      childTree.push({ label: e.tag, parent: parent });
    }
  });
  console.log(childTree);
  return childTree;
};

const DomainView = () => {
  const works = useContext(WorksContext);
  getDomainChildren("front-end");

  const list = ["front-end", "back-end", "infrastructure"];

  const trees = list.map((e)=>{
    return {
      "tag":e,
      "childTree":getDomainChildren(e)
    }
  })

  return (
    <div>
      {list.map((e) => {
        return (
          <Node
            key={e}
            label={e}
            level={
              works.find((tag) => tag.label == e) !== undefined
                ? works.find((tag) => tag.label == e).level
                : 0
            }
          />
        );
      })}
    </div>
  );
};

export default DomainView;
