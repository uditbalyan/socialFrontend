import React from "react";
import "./App.css";
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="appBody">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
