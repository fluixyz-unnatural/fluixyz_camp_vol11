import { Container, Header, Image, Grid, Button } from "semantic-ui-react";
import patternBg from "../assets/pattern-bg.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${patternBg})`,
          padding: "100px",
          height: "50vh",
          position: "relative",
          marginBottom: "50px",
        }}
      >
        <Image
          src={logo}
          size="large"
          style={{
            position: "absolute",
            bottom: "50px",
            right: "50px",
            filter: "drop-shadow(2px 4px 6px black) brightness(0.8)",
          }}
        />
        <Container
          style={{
            position: "absolute",
            bottom: "50px",
            textShadow: "1px 1px 10px black",
          }}
        >
          <Header as="h1" style={{ color: "white", marginBottom: "2rem" }}>
            Gaming Portfolio
          </Header>
          <p
            style={{ color: "white", fontSize: "1.2rem", lineHeight: "0.8rem" }}
          >
            スキルツリーのあるゲームでスキルを解放していくのって楽しいですよね？
          </p>
          <p
            style={{ color: "white", fontSize: "1.2rem", lineHeight: "0.8rem" }}
          >
            自身のスキルをゲームのように
            <span style={{ fontWeight: "bold", margin: "5px" }}>可視化</span>
            して、楽しく目標設定・スキルアップをしましょう。
          </p>
        </Container>
      </div>
      <Grid
        container
        relaxed="very"
        columns="2"
        style={{ marginBottom: "32px", minHeight: "100px" }}
      >
        <Grid.Column>
          <Header as="h2">理念</Header>
          <p style={{ lineHeight: "1.8rem" }}>
            使い慣れた道具ほど扱いやすくなるため、1つの道具に慣れてしまうと他の道具を触るモチベーションが落ちてしまう。
          </p>{" "}
          <p style={{ lineHeight: "1.8rem", marginTop: "-6px" }}>
            そこで様々なスキルをツリー状に並べ、使える道具を可視化することで、他のスキルに手を伸ばすモチベーション作りをしようというコンセプトのもと作成しました。
          </p>
        </Grid.Column>
        <Grid.Column>
          <Header as="h2">特徴</Header>
          <p style={{ lineHeight: "1.8rem" }}>
            　ポートフォリオというのは基本的に人に自身の成果物を見せるためのもので、自身の成果物を自分のためにまとめるサービスというのはあまり見かけません。
          </p>{" "}
          <p style={{ lineHeight: "1.8rem", marginTop: "-6px" }}>
            本サービスは、自分のためという点に重きをおいて制作しました。
          </p>
        </Grid.Column>
      </Grid>
      <Button
        as={Link}
        to="/signup"
        primary
        size="huge"
        style={{
          display: "block",
          margin: "auto",
          marginTop: "100px",
          marginBottom: "30px",
          width: "300px",
        }}
      >
        登録して使ってみる
      </Button>
      <Button
        as={Link}
        to="/signin"
        secondary
        size="huge"
        style={{
          display: "block",
          margin: "auto",
          marginBottom: "30px",
          width: "300px",
        }}
      >
        登録済みの方はこちら
      </Button>
    </>
  );
};

export default Home;
