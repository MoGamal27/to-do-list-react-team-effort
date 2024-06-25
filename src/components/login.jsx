import { set } from "mongoose";
import { useState, useEffect } from "react";
import "../styles/login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [data, setData] = useState(null);
  const handleLogin = (e) => {
    e.preventDefault();
    const blog = { email, password };
    setData(blog);
    console.log(blog);
  };
  return (
    <>
      <form className="login-form" onSubmit={(e) => handleLogin(e)}>
        <h2>Login</h2>
        <div children="login-form-input">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div children="login-form-input">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
