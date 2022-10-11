import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Link, Outlet } from "react-router-dom";
import AllUser from './user/allUser';
import json from './data/data.json';
import './App.css';
import ClickCounter from './hoc/clickCounter';
import HoverCounter from './hoc/hoverCounter';

function App() {


  sessionStorage.setItem("users", JSON.stringify(json.users))
  return (
    <div className="App">

      <h1>CRUD</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/user">Users</Link> |{" "}
        <Link to="/clickcounter">clickcounter</Link> |{" "}
        <Link to="/hovercounter">hovercounter</Link>
      </nav>
      <Outlet />
    
    </div>
  );
}

export default App;
