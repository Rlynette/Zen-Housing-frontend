import React from "react";
// import { useNavigate } from "react-router-dom";
import "./App.css"
import {useState} from "react"


function Login() {
  // const navigate = useNavigate();
  const [username, setUserName] = useState['']
  const [password, setPassword] = useState[""];

  function handleSubmit(e) {
    e.preventDefault();
    const save = {username, password}
    fetch("",{
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(save)
    })
    .then((res) => res.json())

    .then(() =>{
      setUserName(' ')
      setPassword(' ')

    })
  //   navigate("/housedetails");
  // }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
}
export default Login;
