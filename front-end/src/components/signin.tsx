import { ReactEventHandler } from "react";
import { auth } from "../firebase";

const SignIn = () => {
  const handleSubmit = (e: any) => {
    e?.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email.value, password.value);
    auth.signInWithEmailAndPassword(email.value, password.value);
  };
  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email</label>
          <input name="email" type="email"></input>
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password"></input>
        </div>
        <button>ログイン</button>
      </form>
    </div>
  );
};

export default SignIn;
