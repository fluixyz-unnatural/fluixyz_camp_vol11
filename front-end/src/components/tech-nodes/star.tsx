import { Icon } from "semantic-ui-react";
import "../gates/gate.css";

interface Props {
  level: number;
}

const Star = (props: Props) => {
  const stars: Array<number> = [];
  for (let i = 0; i < props.level; i++) stars.push(1);
  for (let i = props.level; i < 5; i++) stars.push(0);
  return (
    <div style={{ marginTop: "-10px" }}>
      {stars.map((s) => (
        <Icon name={s === 1 ? "star" : "star outline"}></Icon>
      ))}
    </div>
  );
};

export default Star;
