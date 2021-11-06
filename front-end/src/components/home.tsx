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
          <Header as="h1" style={{ color: "white" }}>
            Gaming Portfolio
          </Header>
          <p style={{ color: "white" }}>
            スキルツリーのあるゲームでスキルを解放していくのって楽しいですよね？
          </p>
          <p style={{ color: "white" }}>
            自身のスキルをゲームのように<span>可視化</span>
            して、楽しく目標設定・スキルアップをしましょう。
          </p>
        </Container>
      </div>
      <Grid
        container
        columns="3"
        style={{ marginBottom: "32px", minHeight: "300px" }}
      >
        <Grid.Column>
          <Header as="h2">理念</Header>
          <p>
            技術っていろいろレイヤーがあるよね。人が外から確認できるのは究極的には成果物だけなんだから、そこからどれだけ簡単に情報を引き出せるかを考えよう。
          </p>
        </Grid.Column>
        <Grid.Column>
          <Header as="h2">特徴</Header>
          <p>
            ポートフォリオと使用技術を対応付け、そこからスキルツリーを生成できます。
          </p>
        </Grid.Column>
        <Grid.Column>
          {/* TODO 埋める */}
          <Header as="h2">ウーッッ</Header>
          <p>ｷｴｷｴ</p>
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
