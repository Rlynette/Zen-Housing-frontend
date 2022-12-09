import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Houses from "./Houses";
import "./App.css";
import SignUp from "./SignUp";

function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      <BrowserRouter>
        {" "}
        <NavBar />
        {/* <ProductContainer /> */}
        <Switch>
          <Route exact path="/signup">
            <SignUp onLogin={setUser} />
          </Route>
          <Route exact path="/login">
            <Login onLogin={setUser} />
          </Route>
          <Route exact path="/housedetails">
            <Houses />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
