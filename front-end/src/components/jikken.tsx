import { useState } from "react";

type NodeLabel = {
  label: string;
};

function SmallNode(props: NodeLabel) {
  return <span>{props.label}</span>;
}
function BigNode(props: NodeLabel) {
  const children = ["a", "b", "c"];
  return (
    <div>
      <h4>{props.label}</h4>
      <div>
        {children.map((elm) => (
          <span>
            {ToggleNode({ init: false, label: `${props.label}-${elm}` })}
          </span>
        ))}
      </div>
    </div>
  );
}

type toggleProps = {
  label: string;
  init: boolean;
};

function ToggleNode(props: toggleProps) {
  let [isBig, setIsBig] = useState(props.init);
  const toggle = () => {
    setIsBig(!isBig);
  };
  let content = SmallNode({ label: props.label });
  if (isBig === true) content = BigNode({ label: props.label });

  return <div onClick={toggle}>{content}</div>;
}

export default ToggleNode;
