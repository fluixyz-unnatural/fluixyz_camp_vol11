import "./gate.css";
import Node from "../tech-nodes/node";

const LanguageView = () => {
  return (
    <div>
      <Node label="Python" level={1} />
      <Node label="JavaScript" level={3} />
      <Node label="C++" level={3}/>
    </div>
  );
};

export default LanguageView;
