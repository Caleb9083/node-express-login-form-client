import "./styles/Login.css";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataToDisplay, setDataToDisplay] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log(email, password);

    const data = { email: email, password: password };

    fetch("https://node-express-login-form.herokuapp.com/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setDataToDisplay(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form className="login" onSubmit={onSubmitHandler}>
        <h3>Login</h3>
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
        <button>Login</button>
      </form>
      <div className="response">
        {dataToDisplay &&
          dataToDisplay.map((el, key) => {
            return <li key={key}>{el.email}</li>;
          })}
      </div>
    </div>
  );
};

export default Login;
