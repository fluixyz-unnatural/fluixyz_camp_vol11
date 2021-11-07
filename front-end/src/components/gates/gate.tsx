import "./gate.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import LanguageView from "./languageView";
import DomainView from "./domainView";
import GenreView from "./genreView";
import { createContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import { useAuthContext } from "../../context/AuthContext";
import hash from "object-hash";

interface GateProps {
  label: string;
  path: string;
  color: string;
}

interface LevelContext {
  label: string;
  level: number;
}

export const WorksContext = createContext<Array<LevelContext>>([]);

const Gate = (props: GateProps) => {
  return (
    <Link to={props.path}>
      <div className={`gate neontext ${props.color}`}>{props.label}</div>
    </Link>
  );
};

const GateIndex = () => {
  const [works, setworks] = useState([]);
  const { user }: any = useAuthContext();
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
          console.log(data.techs);
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
    <WorksContext.Provider
      value={works}
    >
      <BrowserRouter>
        <div className={"spacer"}></div>
        <div className={"full-container"}>
          <Route exact path="/gate">
            <Gate path="/gate/domain" label="Domain" color="red" />
            <Gate path="/gate/language" label="Language" color="blue" />
            <Gate path="/gate/genre" label="Genre" color="green" />
          </Route>
          <Route exact path="/gate/language" component={LanguageView} />
          <Route exact path="/gate/domain" component={DomainView} />
          <Route exact path="/gate/genre" component={GenreView} />
        </div>
      </BrowserRouter>
    </WorksContext.Provider>
  );
};

export default GateIndex;
