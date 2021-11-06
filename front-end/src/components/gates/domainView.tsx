import "./gate.css";
import Node from "../tech-nodes/node";

const DomainView = () => {
  return (
    <div>
      <Node label="front-end" level={1} />
      <Node label="back-end" level={3} />
      <Node label="infrastructure" level={3}/>
    </div>
  );
};

export default DomainView;
