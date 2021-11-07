import "./gate.css";
import Node from "../tech-nodes/node";
import { WorksContext } from "./gate";
import { useContext } from "react";

const GenreView = () => {
  const works = useContext(WorksContext);
  const list = ["graphic", "audio", "algorithm"];
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

export default GenreView;
