import React from "react";
import "../styles/LeftBar.css";

function LeftBar() {
  return (
    <div className="leftbar">
      <p>Left SideBar</p>
      <p>
        This section will contain sorting functionality(by name, date(newest to
        oldest)) and options to filter tasks based on their completion status
      </p>
    </div>
  );
}

export default LeftBar;
