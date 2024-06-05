import React from "react";
import "../styles/Card.css";
import { ITask } from "../schema/taskType";
import { format } from "date-fns";
// import Button from "./Button.tsx";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

interface ICard extends ITask {
  // onCheckboxClick: (value: boolean, indexOfMicroTask: number) => void;
  // indexOfMicroTask: number;
  onEditClick?: (value: ITask) => void;
}

function Card({ title, dueDate, tags, onEditClick, ...rest }: ICard) {
  // const handleCheck = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   indexOfMicroTask: number,
  // ) => {
  //   // console.log(e.target.checked);
  //   onCheckboxClick(e.target.checked, indexOfMicroTask);
  // };

  const onEdit = () => {
    onEditClick?.({
      title,
      dueDate,
      tags,
      ...rest,
    });
  };

  return (
    <div className="card border rounded-md mb-3">
      <div className="px-4 mt-2 mb-2">
        {tags
          ?.filter((tag, i) => i < 3)
          .map((tag, i) => {
            return (
              <span
                key={i}
                className="mr-2 bg-green-200 text-[11px] rounded py-0.5 px-1"
              >
                {tag[0].toUpperCase() + tag.slice(1)}
              </span>
            );
          })}
      </div>

      <p className="font-semibold text-[14px] px-4 mb-2">{title}</p>
      <div className="flex items-center mb-2 px-4">
        <FaCalendarAlt />
        <p className="text-[12px] text-[#62708D] px-2">
          Due Date {format(dueDate, "dd MMM yyyy")}
        </p>
      </div>
      <div className="flex items-center mb-2 px-4">
        <button className="text-[12px] text-gray-700" onClick={onEdit}>
          Edit
        </button>
        <MdDeleteOutline />
        <a className="text-[12px] px-2 text-red-700">Delete</a>
      </div>
      {/* <Button className="border-2 border-black">Add</Button> */}
      {/* <div>
        {(tasks as Array<{ task: string; completed: boolean }>).map(
          (singleTask, indexOfMicroTask) => {
            // console.log(indexOfMicroTask);
            return (
              <div className="check flex" key={indexOfMicroTask}>
                <input
                  type="checkbox"
                  checked={singleTask.completed}
                  onClick={(e) => handleCheck(e, indexOfMicroTask)}
                  key={indexOfMicroTask}
                />
                <p key={indexOfMicroTask}>{singleTask.task}</p>
              </div>
            );
          },
        )}
      </div> */}
      {/* <p>{isCompleted}</p> */}
    </div>
  );
}

export default Card;
