import { Menu, Segment, Image, Button } from "semantic-ui-react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import LogoImg from "../assets/logo.png";

// TODO サインイン、サインアップ、サインアウトの切り替え

const Header = () => {
  const now = useLocation().pathname;
  const pages = [
    { path: "/", label: "Home" },
    { path: "/work", label: "作品管理" },
    { path: "/tech-node", label: "tech-node(dev)" },
    { path: "/graph", label: "graph(dev)" },
    { path: "/signup", label: "signup" },
    { path: "/signin", label: "signin" },
  ];
  const signOut = () => {
    auth.signOut();
    window.location.href = "/"
  };
  return (
    <Segment inverted>
      <Menu stackable inverted fixed="top" size="large">
        <Menu.Item as={Link} to="/">
          <Image size="mini" src={LogoImg} style={{ marginRight: "1.5em" }} />
          ゲーミングポートフォリオ
        </Menu.Item>
        {pages.map((e) => {
          return (
            <Menu.Item
              as={Link}
              to={e.path}
              name={e.label}
              active={now === e.path}
            />
          );
        })}
        <Menu.Item position="right">
          <Button as="a" href="/signin" inverted style={{ marginRight: "5px" }}>
            SignIn
          </Button>
          <Button as="a" href="/signup" inverted style={{ marginRight: "5px" }}>
            SignUp
          </Button>
          <Button inverted onClick={signOut}>
            SignOut
          </Button>
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default Header;
