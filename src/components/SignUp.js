import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function SignUp({onLogin}) {
     const [username, setUserName] = useState("");
     const [password, setPassword] = useState("");
     const [passwordConfirmation, setPasswordConfirmation] = useState("");
     const [errors, setErrors] = useState([]);
     

     function handleSubmit(e) {
       e.preventDefault();
       setErrors([]);
       fetch("/signup", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           username,
           password,
           password_confirmation: passwordConfirmation,
           
         }),
       }).then((r) => {
         if (r.ok) {
           r.json().then((user) => {
             onLogin(user);
           });
         } else {
           r.json().then((err) => setErrors(err.errors));
         }
       });
     }


  return (
      <div className="signup">
        <h1>Signup</h1>
        <form id="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        
          <button type="submit">Sign Up</button>
          {errors.map((err) => (
            <li style={{ color: "red" }} key={err}>
              {err}
            </li>
          ))}
        </form>
        <div className="already">
          <hr />
          <p>
            Already have an account? &nbsp;
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
          </p>
        </div>
      </div>
      ); 
      } 

      export default SignUp;

