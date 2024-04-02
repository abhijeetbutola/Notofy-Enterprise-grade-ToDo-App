import React from "react";
import "../styles/Card.css";
import { ITask } from "../schema/taskType";

interface ICard extends ITask {
  onCheckboxClick: (value: boolean) => void;
}

function Card({
  title,
  task,
  createdDate,
  isCompleted,
  onCheckboxClick,
}: ICard) {
  const handleCheck = (e) => {
    // console.log(e.target.checked);
    onCheckboxClick(e.target.checked);
  };

  // console.log(isCompleted);
  return (
    <div className="card">
      <p>{title}</p>
      <div className="check">
        <input type="checkbox" checked={isCompleted} onClick={handleCheck} />
        <p>{task}</p>
      </div>
      <p>{createdDate.toLocaleString()}</p>
      {/* <p>{isCompleted}</p> */}
    </div>
  );
}

export default Card;
