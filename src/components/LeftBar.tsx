import React from "react";
import "../styles/LeftBar.css";
import NotofyLogo from "../assets/icons/logo.tsx";

function LeftBar() {
  return (
    <div className="leftbar pl-2 pt-2 bg-[#036666] text-white ml-4 rounded-md mt-4 mb-4 shadow-md">
      <div className="flex gap-2">
        <div className=" w-fit m-auto">
          <NotofyLogo />
        </div>
        <p className="font-bold text-3xl">Notofy</p>
      </div>
    </div>
  );
}

export default LeftBar;
