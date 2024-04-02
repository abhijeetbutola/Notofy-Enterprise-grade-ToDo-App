import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <div className="header-section">
        ToDo List
        <input className="search-box" type="text" />
      </div>
    </>
  );
}

export default Header;
