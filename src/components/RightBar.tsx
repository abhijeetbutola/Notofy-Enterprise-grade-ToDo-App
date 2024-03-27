import React from "react";
import "../styles/RightBar.css";

function RightBar() {
  return (
    <>
      <div className="rightbar">
        <p>Right SideBar</p>
        <p>
          This section is for displaying the calendar. The sidebar will be
          collapsable. If a user clicks on a date in the calendar then collapse
          the sidebar and open that date's modal window displaying all the
          tasks.
        </p>
      </div>
    </>
  );
}

export default RightBar;
