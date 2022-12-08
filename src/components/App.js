// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Houses from './Houses';
// import { BrowswerRouter, Switch, Route }from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>

      
      <BrowserRouter>      <NavBar />
      {/* <ProductContainer /> */}
      <Switch>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/housedetails" element={<Houses />}></Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
