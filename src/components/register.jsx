import { set } from "mongoose";
import { useState, useEffect } from "react";
import "../styles/register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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
      <form className="register-form" onSubmit={(e) => handleLogin(e)}>
        <h2>Register Now and start planning </h2>
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
          <label for="username">Username</label>
          <input
            type="username"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
