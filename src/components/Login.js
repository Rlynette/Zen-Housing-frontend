import React from "react";
// import { useNavigate } from "react-router-dom";
import "./App.css"
import {useState} from "react"

function Login({onLogin}) {
  // const navigate = useNavigate();
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("")

 function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
        });
      } else {
        r.json().then((err) => {setErrors(err.errors)
        console.log(err)
        });
      }
    });
  }
  //   navigate("/housedetails");
  // }
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
