import "./styles/SignUp.css";
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div>
      <form className="signup" onSubmit={onSubmitHandler}>
        <h3>Sign up </h3>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
