import { Form, Button, Container, Header } from "semantic-ui-react";
import TagInput from "./tagInput";

const Post = () => {
  return (
    <>
      <div style={{ marginTop: "64px" }}></div>
      <Container text>
          <Header as="h2">作品を登録する</Header>
        <Form>
          <Form.Field>
            <label>作品タイトル</label>
            <input></input>
          </Form.Field>
          <Form.Field>
            <label>概要</label>
            <textarea></textarea>
          </Form.Field>
          <Form.Field>
            <label>サムネイル</label>
            <input type="file" accept="image/*"></input>
          </Form.Field>
          <Form.Field>
            <label>使用技術</label>
            <TagInput />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default Post;
