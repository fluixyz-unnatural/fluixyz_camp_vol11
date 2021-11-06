import { ReactEventHandler } from "react";
import { auth } from "../firebase";

const SignUp = () => {
  const handleSubmit = (e: any) => {
    e?.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email.value, password.value);
    auth.createUserWithEmailAndPassword(email.value, password.value);
  };
  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email</label>
          <input name="email" type="email"></input>
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password"></input>
        </div>
        <button>登録</button>
      </form>
    </div>
  );
};

export default SignUp;
