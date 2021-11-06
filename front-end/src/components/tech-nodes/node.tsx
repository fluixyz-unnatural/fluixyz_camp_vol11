import "../gates/gate.css";
import Star from "./star"

interface Props {
  label: string;
  level: number;
}

const Node = (props: Props) => {
  const stars: Array<number> = [];
  for (let i = 0; i < props.level; i++) stars.push(1);
  for (let i = props.level; i < 5; i++) stars.push(0);
  return (
    <div className={"neontext node-container"}>
      <h3>{props.label}</h3>
      <Star level={props.level} />
    </div>
  );
};

export default Node;
