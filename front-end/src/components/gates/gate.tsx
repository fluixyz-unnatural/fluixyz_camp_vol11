import "./gate.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import LanguageView from "./languageView";
import DomainView from "./domainView";
import GenreView from "./genreView";
import { createContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import { useAuthContext } from "../../context/AuthContext";
import hash from "object-hash";
import FrontEndTree from "./front-end";

interface GateProps {
  label: string;
  path: string;
  color: string;
  onClick: Function;
}

interface LevelContext {
  label: string;
  level: number;
}

export const WorksContext = createContext<Array<LevelContext>>([]);

const Gate = (props: GateProps) => {
  const handleClick = () => {
    props.onClick(props.path);
  };
  return (
    <div onClick={handleClick}>
      <div className={`gate neontext ${props.color}`}>{props.label}</div>
    </div>
  );
};

const GateIndex = () => {
  const [works, setworks] = useState([]);
  const { user }: any = useAuthContext();
  const [page, setPage] = useState("none");
  const list = [
    "javascript",
    "python",
    "go",
    "cpp",
    "ruby",
    "typescript",
    "html",
    "css",
    "semantic-ui",
    "vue",
    "react",
    "express",
    "ruby-on-rails",
    "flask",
    "django",
    "three-js",
    "nuxtjs",
    "nextjs",
    "nginx",
    "apache",
    "docker",
    "ec2",
    "ecs",
    "lambda",
    "s3",
    "amplify",
    "firebase",
    "cloud-functions",
    "compute-engine",
    "cloud-storage",
    "container",
    "nodejs",
    "web-audio-api",
    "github-actions",
    "front-end",
    "back-end",
    "infrastructure",
    "graphic",
    "audio",
    "algorithm",
  ];
  useEffect(() => {
    const tmp: Array<LevelContext> = [];
    list.forEach((e) => {
      tmp.push({ label: e, level: 0 });
    });
    db.collection("works")
      .where("author", "==", hash.MD5(user.email))
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          data.techs.forEach((tag: string) => {
            if (list.includes(tag)) {
              tmp.find((elm) => elm.label == tag).level++;
            }
          });
        });
      })
      .catch((err) => {
        alert(err);
      });
    setworks(tmp);
  }, []);
  return (
    <WorksContext.Provider value={works}>
      <BrowserRouter>
        <div className={"spacer"}></div>
        <div className={"full-container"}>
          <Gate path="front" label="front-end" color="red" onClick={setPage} />
          <Gate
            path="back"
            label="back-end(WIP)"
            color="blue"
            onClick={setPage}
          />
          <Gate
            path="infra"
            label="Infra(WIP)"
            color="green"
            onClick={setPage}
          />
        </div>
        {page == "front" ? <FrontEndTree closeFunction={setPage} /> : ""}
      </BrowserRouter>
    </WorksContext.Provider>
  );
};

export default GateIndex;
