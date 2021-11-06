import { useState } from "react";
import { auth } from "../firebase";
import { Message, Container, Input, Button } from "semantic-ui-react";
import { useAuthContext } from "../context/AuthContext";
import { Redirect } from "react-router";

const SignUp = () => {
  const [err, setErr] = useState("");
  const [completion, setCompletion] = useState("");

  const { user } = useAuthContext();

  if (auth.currentUser?.emailVerified) return <Redirect to="/" />;

  const handleSubmit = (e: any) => {
    e?.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email.value, password.value);
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((user) => {
        auth.currentUser?.sendEmailVerification().then(() => {
          setCompletion("complete");
        });
      })
      .catch((err: Error) => {
        setErr(err.message);
      });
  };
  return (
    <div style={{ marginTop: "65px" }}>
      <Container textAlign="center">
        <h1>ユーザ登録</h1>

        {err != "" ? <Message warning>{err}</Message> : ""}
        {completion == "" ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label
                style={{
                  width: "100px",
                  display: "inline-block",
                  marginBottom: "20px",
                }}
              >
                e-mail
              </label>
              <Input name="email" type="email"></Input>
            </div>
            <div>
              <label
                style={{
                  width: "100px",
                  display: "inline-block",
                  marginBottom: "20px",
                }}
              >
                パスワード
              </label>
              <Input name="password" type="password"></Input>
            </div>
            <Button primary>登録</Button>
          </form>
        ) : (
          <>
            <p style={{ marginTop: "30px" }}>認証メールを送信しました。</p>
            <p>メール内のリンクをクリックしてください。</p>
          </>
        )}
      </Container>
    </div>
  );
};

export default SignUp;
