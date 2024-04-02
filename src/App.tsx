import React from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import LeftBar from "./components/LeftBar.tsx";
import Footer from "./components/Footer.tsx";
import CardList from "./components/CardList.tsx";
import RightBar from "./components/RightBar.tsx";

function App() {
  return (
    <>
      <Header></Header>
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

// protected routes
// jwt token
