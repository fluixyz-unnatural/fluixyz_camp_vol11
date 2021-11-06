import { Message, Container, Input, Button } from "semantic-ui-react";
import { useState } from "react";
import { auth } from "../firebase";
import { useAuthContext } from "../context/AuthContext";
import { Redirect } from "react-router";

const SignIn = () => {
  const [err, setErr] = useState("");
  const { user } = useAuthContext();

  if(user)return <Redirect to="/" />

  const handleSubmit = (e: any) => {
    e?.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email.value, password.value);
    auth
      .signInWithEmailAndPassword(email.value, password.value)
      .catch((err: Error) => {
        setErr(err.message);
      })
      .then(() => {
        window.location.href = "/";
      });
  };
  return (
    <div style={{ marginTop: "65px" }}>
      <Container textAlign="center">
        <h1>サインイン</h1>
        {err != "" ? <Message warning>{err}</Message> : ""}
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
          <Button primary>サインイン</Button>
        </form>
      </Container>
    </div>
  );
};

export default SignIn;
