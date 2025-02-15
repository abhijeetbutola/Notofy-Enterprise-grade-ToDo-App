import React from "react";
import "./App.css";
// import Header from "./components/Header.tsx";
import LeftBar from "./components/LeftBar.tsx";
// import Footer from "./components/Footer.tsx";
import CardList from "./components/CardList.tsx";
import RightBar from "./components/RightBar.tsx";
// import Sidepanel from "./components/Sidepanel.tsx";
// import { useState } from "react";

function App() {
  // const [sidebarVisible, setSidebarVisible] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarVisible(!sidebarVisible);
  // };

  return (
    <>
      {/* <Header></Header> */}

      <div className={`appcontent`}>
        <LeftBar></LeftBar>
        <CardList></CardList>
        <RightBar></RightBar>
      </div>
      {/* <Sidepanel sidebarVisible={sidebarVisible}></Sidepanel> */}

      {/* <Footer></Footer> */}
    </>
  );
}

export default App;

// protected routes
// jwt token
