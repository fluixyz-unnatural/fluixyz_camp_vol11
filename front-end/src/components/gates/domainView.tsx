import "./gate.css";
import Node from "../tech-nodes/node";
import { WorksContext } from "./gate";
import { useContext } from "react";

const DomainView = () => {
  const works = useContext(WorksContext);
  const list = ["front-end","back-end","infrastructure"]
  return (
    <div>
      {list.map((e)=>{
        return <Node key={e} label={e} level={works.find((tag)=>tag.label==e).level} />
      })}
    </div>
  );
};

export default DomainView;
