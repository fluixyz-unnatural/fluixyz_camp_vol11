import { Form, Button, Container, Header } from "semantic-ui-react";
import TagInput from "./tagInput";
import { db, storage, fullpath2url } from "../firebase";
import { SyntheticEvent } from "react";
import { v4 } from "uuid";
import hash from "object-hash";
import { useAuthContext } from "../context/AuthContext";
import { useHistory } from "react-router";

const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));

const imageTrimming = async (f: File) => {
  let ans: Blob | null = null;
  let ok = false;
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 360;
  const ctx = canvas.getContext("2d");
  const reader = new FileReader();
  const img: any = document.createElement("Img");
  reader.readAsDataURL(f);
  reader.onload = () => {
    img.src = reader.result;
    img.onload = () => {
      console.log(img);
      console.log(img.width, img.height);
      let sx, sy, sw, sh;
      const x = img.width;
      const y = img.height;
      if (x / 16 > y / 9) {
        //　横長
        sy = 0;
        sw = (16 / 9) * y;
        sx = (x - sw) / 2;
        sh = y;
      } else {
        sh = (9 / 16) * x;
        sx = 0;
        sw = x;
        sy = (y - sh) / 2;
      }
      console.log(sx, sy, sw, sh);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, 640, 360);
      canvas.toBlob((blob) => {
        ans = blob;
        ok = true;
        console.log(ans);
      });
    };
  };
  while (!ok) {
    await sleep(10);
  }
  return ans;
};

const Post = () => {
  const { user }: any = useAuthContext();
  const history = useHistory();
  const handleSubmit = async(e: any) => {
    //画像を先に上げる
    const storageRef = storage.ref();
    const file = e.target.thumb.files[0];
    if (file == null) {
      alert("file not selected");
      return;
    }
    const blobThumb = await imageTrimming(file);
    const filename = v4().toString();
    storageRef
      .child(`images/thumbnail/${filename}`)
      .put(blobThumb)
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
