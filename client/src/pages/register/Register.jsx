import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleRegister = async (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    try {
      await axios.post("auth/register", { email, username, password });
      history.push("/login");
    } catch (err) {}
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="img/LOGO.png" alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Create Account</h1>
          <input type="email" placeholder="Email address" ref={emailRef} />
          <input type="username" placeholder="Username" ref={usernameRef} />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <button className="registerButton" onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
