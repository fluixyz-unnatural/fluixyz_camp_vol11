import "./gate.css";
import Node from "../tech-nodes/node";

const GenreView = () => {
  return (
    <div>
      <Node label="Graphic" level={1} />
      <Node label="Algorithm" level={3} />
      <Node label="Audio" level={3}/>
    </div>
  );
};

export default GenreView;
