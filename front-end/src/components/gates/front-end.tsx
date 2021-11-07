import frontBase from "../../assets/front-tree-base.png";
import "./tree.css";
import { WorksContext } from "./gate";
import { useContext } from "react";
import Node from "../tech-nodes/node";

const FrontEndTree = () => {
  const worksCtx = useContext(WorksContext);
  const nodeWidth = 300;
  const nodeHeight = 200;
  const scale = 0.5;
  const list = [
    "semantic-ui",
    "css",
    "web-audio-api",
    "html",
    "front-end",
    "canvas",
    "vue",
    "nuxtjs",
    "javascript",
    "react",
    "three-js",
    "nextjs",
  ];
  const pos = {
    "semantic-ui": { x: 188, y: 250 },
    css: { x: 542, y: 532 },
    "web-audio-api": { x: 1054, y: 342 },
    html: { x: 1548, y: 660 },
    "front-end": { x: 872, y: 770 },
    canvas: { x: 204, y: 830 },
    vue: { x: 370, y: 1110 },
    nuxtjs: { x: 144, y: 1486 },
    javascript: { x: 1048, y: 1108 },
    react: { x: 1060, y: 1444 },
    "three-js": { x: 1636, y: 1082 },
    nextjs: { x: 1630, y: 1656 },
  };
  const works = useContext(WorksContext);
  console.log(works);
  const handleClick = (e: any) => {
    console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };
  return (
    <div className={"tree-container"}>
      <img
        onClick={handleClick}
        className={"base-img"}
        style={{ transform: `scale:(${scale})` }}
        src={frontBase}
      ></img>
      {list.map((label) => {
        return (
          <div
            style={{
              position: "absolute",
              left: pos[label].x * scale,
              top: pos[label].y * scale,
            }}
          >
            <Node
              label={label}
              level={
                works.find((tag) => tag.label == label) !== undefined
                  ? works.find((tag) => tag.label == label).level
                  : 0
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default FrontEndTree;
