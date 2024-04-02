import React, { useState, useEffect } from "react";
import Card from "./Card.tsx";
import "../styles/CardList.css";
import { ITask } from "../schema/taskType.ts";
import { useSelector } from "react-redux";

function CardList() {
  const date = useSelector((state: any) => state.calendar.value);
  console.log(date);
  const [filter, setFilter] = useState({
    sortName: false,
  });

  const [cards, setCards] = useState<Array<ITask>>([
    {
      title: "Task1",
      task: "wsdf",
      createdDate: new Date("2024-04-01"),
      isCompleted: true,
    },
    {
      title: "Task2",
      task: "asdl",
      createdDate: new Date("2024-04-01"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-04-01"),
      isCompleted: true,
    },
    {
      title: "Task1",
      task: "wsdf",
      createdDate: new Date("2024-04-01"),
      isCompleted: true,
    },
    {
      title: "Task2",
      task: "asdl",
      createdDate: new Date("2024-04-01"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-04-01"),
      isCompleted: true,
    },
    {
      title: "Task1",
      task: "wsdf",
      createdDate: new Date("2024-04-01"),
      isCompleted: true,
    },
    {
      title: "Task2",
      task: "asdl",
      createdDate: new Date("2024-04-01"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-04-01"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-04-01"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-03-31"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-03-31"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-03-31"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-03-31"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-03-30"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-03-30"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-03-30"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-03-30"),
      isCompleted: true,
    },
    {
      title: "Task3",
      task: "vbru",
      createdDate: new Date("2024-03-29"),
      isCompleted: true,
    },
  ]);

  const [filterCards, setFilterCards] = useState([...cards]);

  useEffect(() => {
    if (!date) return;
    setFilterCards(
      cards.filter((card) => {
        return (
          card.createdDate.getFullYear() === date.getFullYear() &&
          card.createdDate.getMonth() === date.getMonth() &&
          card.createdDate.getDate() === date.getDate()
        );
      }),
    );
  }, [date, filter]);

  const handleTaskUpdate = (value: boolean, id: number) => {
    const t = [...cards];
    t[id].isCompleted = value;
    setCards(t);
  };

  return (
    <div>
      <button>a;dfklajs</button>
      <div className="cardlist">
        <div className="addButton-div">
          <button className="addButton">Add Card</button>
        </div>
        {filterCards.map((card, index) => (
          <Card
            {...card}
            onCheckboxClick={(e) => handleTaskUpdate(e, index)}
            key={index}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default CardList;

// how to extract local data from cache in react-query
// momentjs
