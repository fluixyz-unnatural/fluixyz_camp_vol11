import { Form, Button, Container, Header } from "semantic-ui-react";
import TagInput from "./tagInput";
import { WorkType } from "../types/api";
import { db, storage, fullpath2url } from "../firebase";
import { SyntheticEvent } from "react";
import { v4 } from "uuid";
import hash from "object-hash";
import { useAuthContext } from "../context/AuthContext";
import { useHistory } from "react-router";

const Post = () => {
  const { user } = useAuthContext();
  const history = useHistory();
  const handleSubmit = (e: any) => {
    //画像を先に上げる
    const storageRef = storage.ref();
    const file = e.target.thumb.files[0];
    console.log(user);
    if (file == null) {
      alert("file not selected");
      return;
    }
    const filename = v4().toString();
    storageRef
      .child(`images/thumbnail/${filename}`)
      .put(file)
      .then((e: any) => {})
      .catch((err) => alert(err.message));

    const worksRef = db.collection("works");
    const params = {
      title: e.target.title.value,
      thumbnail: filename,
      summary: e.target.summary.value,
      techs: [],
      author: hash.MD5(user.email),
      season: e.target.date.value,
    };
    worksRef
      .add(params)
      .then(() => {
        history.push("/work");
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <>
      <div style={{ marginTop: "64px" }}></div>
      <Container text>
        <Header as="h2">作品を登録する</Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>作品タイトル</label>
            <input name="title"></input>
          </Form.Field>
          <Form.Field>
            <label>概要</label>
            <textarea name="summary"></textarea>
          </Form.Field>
          <Form.Field>
            <label>作成時期</label>
            <input type="date" name="date"></input>
          </Form.Field>
          <Form.Field>
            <label>サムネイル</label>
            <input type="file" accept="image/*" name="thumb"></input>
          </Form.Field>
          <Form.Field>
            <label>使用技術</label>
            <TagInput name="taginput" />
          </Form.Field>
          <Button fluid primary type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Post;
