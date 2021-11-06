import "./gate.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import LanguageView from "./languageView";
import DomainView from "./domainView";
import GenreView from "./genreView";

interface GateProps {
  label: string;
  path: string;
  color: string;
}
const Gate = (props: GateProps) => {
  return (
    <Link to={props.path}>
      <div className={`gate neontext ${props.color}`}>{props.label}</div>
    </Link>
  );
};

const GateIndex = () => {
  return (
    <>
      <BrowserRouter>
        <div className={"spacer"}></div>
        <div className={"full-container"}>
          <Route exact path="/gate/">
            <Gate path="/gate/domain" label="Domain" color="red" />
            <Gate path="/gate/language" label="Language" color="blue" />
            <Gate path="/gate/genre" label="Genre" color="green" />
          </Route>
          <Route exact path="/gate/language" component={LanguageView} />
          <Route exact path="/gate/domain" component={DomainView} />
          <Route exact path="/gate/genre" component={GenreView} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default GateIndex;
