import React, { useRef, useEffect } from "react";
import Tree from "../Observable/Tree";

const D3test = () => {
  const svg = useRef(null);
  useEffect(() => {
    const data = {
      name: "vtuber",
      children: [
        { name: "nijisanji", children: [{name:"kuzuha"}, {name:"kanae"}, {name:"tsukinomito" }]},
        {
          name: "hololive",
          children: [{name:"murasakishion"}, {name:"okayu"}, {name:"aqua"}],
        },
      ],
    };
    const chart = Tree(data, {
      label: (d:any) => d.name,
      title: (d:any, n:any) => `${d},${n}`,
    });
    console.log(chart);
    console.log(svg.current);
    const tmp: any = svg.current;
    tmp.appendChild(chart);
  });
  return <div ref={svg}></div>;
};

export default D3test;
