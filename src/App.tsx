import React from "react";
import "./App.css";
import LeftBar from "./components/LeftBar.tsx";
import Footer from "./components/Footer.tsx";
import CardList from "./components/CardList.tsx";
import RightBar from "./components/RightBar.tsx";

function App() {
  return (
    <>
      <div className="header-section">ToDo List</div>
      <div className="main-app">
        <div className="appcontent">
          <LeftBar></LeftBar>
          <CardList></CardList>
          <RightBar></RightBar>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
