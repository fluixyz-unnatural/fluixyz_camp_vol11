import "./gate.css";
import Node from "../tech-nodes/node";
import { useContext } from "react";
import { WorksContext } from "./gate";
const LanguageView = () => {
  const works = useContext(WorksContext);
  const list = [
    "javascript",
    "python",
    "cpp",
    "go",
    "ruby",
    "typescript",
    "html",
    "css",
  ];
  return (
    <div>
      {list.map((e) => {
        return (
          <Node
            key={e}
            label={e}
            level={works.find((tag) => tag.label == e).level}
          />
        );
      })}
    </div>
  );
};

export default LanguageView;
