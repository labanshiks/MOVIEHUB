import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="img/LOGO.png" alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Log In</h1>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Log In
          </button>
          <span>Don't have an account yet?</span>
          <Link style={{ textDecoration: "none", color: "red" }} to="/register">
            <h3>Register here</h3>
          </Link>
        </form>
      </div>
    </div>
  );
}
