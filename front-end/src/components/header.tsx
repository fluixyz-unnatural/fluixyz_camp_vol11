import { Menu, Segment, Image } from "semantic-ui-react";
import { useLocation, Router } from "react-router";
import { Link } from "react-router-dom";
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
  const handleItemClick = (e: any) => {
    console.log(e.target.innerHTML);
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
              onClick={handleItemClick}
              active={now === e.path}
            />
          );
        })}
      </Menu>
    </Segment>
  );
};

export default Header;
