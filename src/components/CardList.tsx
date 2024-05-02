import React, { useState, useEffect } from "react";
import Card from "./Card.tsx";
import "../styles/CardList.css";
import { ITask } from "../schema/taskType.ts";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar.tsx";
// import Button from "./Button.tsx";
import MyModal from "./CreateTaskModal.tsx";
import Button from "./Button.tsx";
import { format } from "date-fns";
import type { RootState } from "../store/store.ts";
import { useDispatch } from "react-redux";
import { setDate } from "../store/slices/calendarSlice.ts";

// mui datepicker
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function CardList() {
  let date: Date | null;
  date = useSelector((state: RootState) => state.calendar.value);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ sort: false });

  const [cards, setCards] = useState<Array<ITask>>([
    {
      tasks: [
        {
          task: "Complete assignment",
          completed: false,
        },
        {
          task: "Read a book",
          completed: true,
        },
        {
          task: "Go for a run",
          completed: false,
        },
        {
          task: "Buy groceries",
          completed: true,
        },
        {
          task: "Write report",
          completed: false,
        },
        {
          task: "Attend meeting",
          completed: true,
        },
        {
          task: "Clean the house",
          completed: false,
        },
        {
          task: "Watch a movie",
          completed: true,
        },
        {
          task: "Cook dinner",
          completed: false,
        },
        {
          task: "Study for exam",
          completed: true,
        },
      ],
      createdDate: new Date(new Date().setDate(new Date().getDate() - 5)),
      title: "Complete homework assignment for history class",
      dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      status: "planned",
      tags: ["home", "personal", "home", "work"],
    },
    {
      tasks: [
        {
          task: "Complete assignment",
          completed: false,
        },
        {
          task: "Read a book",
          completed: true,
        },
        {
          task: "Go for a run",
          completed: false,
        },
        {
          task: "Buy groceries",
          completed: true,
        },
        {
          task: "Write report",
          completed: false,
        },
        {
          task: "Attend meeting",
          completed: true,
        },
        {
          task: "Clean the house",
          completed: false,
        },
        {
          task: "Watch a movie",
          completed: true,
        },
        {
          task: "Cook dinner",
          completed: false,
        },
        {
          task: "Study for exam",
          completed: true,
        },
      ],
      createdDate: new Date(new Date().setDate(new Date().getDate() - 5)),
      title: "Plan and organize weekend trip with friends",
      dueDate: new Date(Date.now() + 1),
      status: "planned",
      tags: ["home", "work", "important"],
    },
    {
      tasks: [
        {
          task: "Complete assignment",
          completed: false,
        },
        {
          task: "Read a book",
          completed: true,
        },
        {
          task: "Go for a run",
          completed: false,
        },
        {
          task: "Buy groceries",
          completed: true,
        },
        {
          task: "Write report",
          completed: false,
        },
        {
          task: "Attend meeting",
          completed: true,
        },
        {
          task: "Clean the house",
          completed: false,
        },
        {
          task: "Watch a movie",
          completed: true,
        },
        {
          task: "Cook dinner",
          completed: false,
        },
        {
          task: "Study for exam",
          completed: true,
        },
      ],
      createdDate: new Date(Date.now() - 3),
      title: "Review and revise presentation slides for meeting",
      dueDate: new Date(Date.now() + 3),
      status: "ongoing",
      tags: ["urgent", "home", "urgent", "important"],
    },
    {
      tasks: [
        {
          task: "Complete assignment",
          completed: false,
        },
        {
          task: "Read a book",
          completed: true,
        },
        {
          task: "Go for a run",
          completed: false,
        },
        {
          task: "Buy groceries",
          completed: true,
        },
        {
          task: "Write report",
          completed: false,
        },
        {
          task: "Attend meeting",
          completed: true,
        },
        {
          task: "Clean the house",
          completed: false,
        },
        {
          task: "Watch a movie",
          completed: true,
        },
        {
          task: "Cook dinner",
          completed: false,
        },
        {
          task: "Study for exam",
          completed: true,
        },
      ],
      createdDate: new Date(Date.now()),
      title: "Schedule appointment with doctor for annual checkup",
      dueDate: new Date(Date.now() + 7),
      status: "completed",
      tags: ["work", "work", "urgent", "home"],
    },
    {
      tasks: [
        {
          task: "Complete assignment",
          completed: false,
        },
        {
          task: "Read a book",
          completed: true,
        },
        {
          task: "Go for a run",
          completed: false,
        },
        {
          task: "Buy groceries",
          completed: true,
        },
        {
          task: "Write report",
          completed: false,
        },
        {
          task: "Attend meeting",
          completed: true,
        },
        {
          task: "Clean the house",
          completed: false,
        },
        {
          task: "Watch a movie",
          completed: true,
        },
        {
          task: "Cook dinner",
          completed: false,
        },
        {
          task: "Study for exam",
          completed: true,
        },
      ],
      createdDate: new Date(Date.now() - 1),
      title: "Research and gather information for upcoming project",
      dueDate: new Date(Date.now() + 9),
      status: "completed",
      tags: ["important", "home", "important", "important", "home"],
    },
    {
      tasks: [
        {
          task: "Complete assignment",
          completed: false,
        },
        {
          task: "Read a book",
          completed: true,
        },
        {
          task: "Go for a run",
          completed: false,
        },
        {
          task: "Buy groceries",
          completed: true,
        },
        {
          task: "Write report",
          completed: false,
        },
        {
          task: "Attend meeting",
          completed: true,
        },
        {
          task: "Clean the house",
          completed: false,
        },
        {
          task: "Watch a movie",
          completed: true,
        },
        {
          task: "Cook dinner",
          completed: false,
        },
        {
          task: "Study for exam",
          completed: true,
        },
      ],
      createdDate: new Date(Date.now() - 6),
      title: "Clean and declutter living room and kitchen area",
      dueDate: new Date(Date.now() + 1),
      status: "completed",
      tags: ["personal", "home", "urgent"],
    },
    {
      tasks: [
        {
          task: "Complete assignment",
          completed: false,
        },
        {
          task: "Read a book",
          completed: true,
        },
        {
          task: "Go for a run",
          completed: false,
        },
        {
          task: "Buy groceries",
          completed: true,
        },
        {
          task: "Write report",
          completed: false,
        },
        {
          task: "Attend meeting",
          completed: true,
        },
        {
          task: "Clean the house",
          completed: false,
        },
        {
          task: "Watch a movie",
          completed: true,
        },
        {
          task: "Cook dinner",
          completed: false,
        },
        {
          task: "Study for exam",
          completed: true,
        },
      ],
      createdDate: new Date(Date.now() - 4),
      title: "Write thank-you notes for birthday gifts received",
      dueDate: new Date(Date.now()),
      status: "planned",
      tags: ["home", "urgent", "urgent", "home", "home"],
    },
    {
      tasks: [
        {
          task: "Complete assignment",
          completed: false,
        },
        {
          task: "Read a book",
          completed: true,
        },
        {
          task: "Go for a run",
          completed: false,
        },
        {
          task: "Buy groceries",
          completed: true,
        },
        {
          task: "Write report",
          completed: false,
        },
        {
          task: "Attend meeting",
          completed: true,
        },
        {
          task: "Clean the house",
          completed: false,
        },
        {
          task: "Watch a movie",
          completed: true,
        },
        {
          task: "Cook dinner",
          completed: false,
        },
        {
          task: "Study for exam",
          completed: true,
        },
      ],
      createdDate: new Date(Date.now() - 5),
      title: "Prepare and cook healthy meals for the week ahead",
      dueDate: new Date(Date.now()),
      status: "completed",
      tags: ["urgent"],
    },
    {
      tasks: [
        {
          task: "Complete assignment",
          completed: false,
        },
        {
          task: "Read a book",
          completed: true,
        },
        {
          task: "Go for a run",
          completed: false,
        },
        {
          task: "Buy groceries",
          completed: true,
        },
        {
          task: "Write report",
          completed: false,
        },
        {
          task: "Attend meeting",
          completed: true,
        },
        {
          task: "Clean the house",
          completed: false,
        },
        {
          task: "Watch a movie",
          completed: true,
        },
        {
          task: "Cook dinner",
          completed: false,
        },
        {
          task: "Study for exam",
          completed: true,
        },
      ],
      createdDate: new Date(Date.now() - 1),
      title: "Practice meditation and mindfulness exercises daily",
      dueDate: new Date(Date.now() + 2),
      status: "completed",
      tags: ["urgent", "urgent", "work", "important", "work"],
    },
    {
      tasks: [
        {
          task: "Complete assignment",
          completed: false,
        },
        {
          task: "Read a book",
          completed: true,
        },
        {
          task: "Go for a run",
          completed: false,
        },
        {
          task: "Buy groceries",
          completed: true,
        },
        {
          task: "Write report",
          completed: false,
        },
        {
          task: "Attend meeting",
          completed: true,
        },
        {
          task: "Clean the house",
          completed: false,
        },
        {
          task: "Watch a movie",
          completed: true,
        },
        {
          task: "Cook dinner",
          completed: false,
        },
        {
          task: "Study for exam",
          completed: true,
        },
      ],
      createdDate: new Date(Date.now()),
      title: "Update resume and LinkedIn profile with recent achievements",
      dueDate: new Date(Date.now() - 1),
      status: "completed",
      tags: ["home", "personal", "work", "important", "urgent"],
    },
  ]);

  const [filterCards, setFilterCards] = useState([...cards]);

  useEffect(() => {
    if (!date) {
      setFilterCards(cards);
      return;
    }
    // console.log(date);
    setFilterCards(
      cards.filter((card) => {
        return (
          card.createdDate.getFullYear() === date?.getFullYear() &&
          card.createdDate.getMonth() === date.getMonth() &&
          card.createdDate.getDate() === date.getDate()
        );
      }),
    );
  }, [date, cards]);

  // console.log(filterCards);

  // useEffect(() => {
  //   console.log("hello");
  // }, [cards]);

  // const handleTaskUpdate = (
  //   value: boolean,
  //   indexOfMicroTask: number,
  //   index: number,
  // ) => {
  //   const t = [...cards];
  //   t[index].tasks[indexOfMicroTask].completed = value;
  //   setCards(t);
  // };
  // console.log(cards);
  // console.log(filterCards);

  const handleFormSubmit = (searchTerm: string) => {
    if (searchTerm !== "") {
      // console.log(searchTerm);
      const filteredCards = filterCards.filter((card) => {
        // console.log(card.title);
        return card.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilterCards(filteredCards);
    } else {
      // console.log("empty: ", searchTerm);
      setFilterCards(cards);
    }
  };

  const handleSortButtonClick = () => {
    const t = !filter.sort;
    setFilter({ ...filter, sort: !filter.sort });
    // console.log(filter);
    if (t === true) {
      setFilterCards(
        filterCards.sort((a, b) => {
          const nameA = a.title.toLowerCase();
          const nameB = b.title.toLowerCase();

          if (nameA < nameB) return 1;
          if (nameA > nameB) return -1;
          return 0;
        }),
      );
    } else {
      setFilterCards(
        filterCards.sort((a, b) => {
          const nameA = a.title.toLowerCase();
          const nameB = b.title.toLowerCase();

          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        }),
      );
    }
  };

  const modalValues = useSelector((state: any) => state.modalValues);
  const tagsValues = useSelector((state: any) => state.value);

  const { title, dueDate, status } = modalValues;
  const tags = tagsValues;

  const handleCreateButtonClick = () => {
    // const title = useSelector((state: any) => state.modalValues.value.title);
    // // const description = useSelector(
    // //   (state: any) => state.modalValues.value.description,
    // // );
    // const dueDate = useSelector(
    //   (state: any) => state.modalValues.value.dueDate,
    // );
    // const status = useSelector((state: any) => state.modalValues.value.status);
    // const tags = useSelector((state: any) => state.modalValues.value.tags);
    // const createdDate = new Date();

    // console.log(title);
    // console.log("hello");

    ////////////do this by using useState//////////////////

    setCards([
      {
        // id: Math.random(),
        title: title,
        tasks: [],
        createdDate: new Date(),
        dueDate: dueDate,
        status: status,
        tags: tags,
      },
      ...cards,
    ]);
  };

  const handleDateChange = (e) => {
    // console.log(e.target.textContent, date);

    if (e.target.textContent === "+" && date !== null) {
      dispatch(
        setDate(new Date(new Date(date).setDate(new Date(date).getDate() + 1))),
      );
    } else if (e.target.textContent === "-" && date !== null) {
      dispatch(
        setDate(new Date(new Date(date).setDate(new Date(date).getDate() - 1))),
      );
    }
  };

  // console.log(date);

  return (
    <div className="m-4 bg-white rounded-md overflow-hidden w-full shadow-md overflow-x-auto">
      {/* <div className="fixed"> */}
      <div className="search-sort flex mr-4">
        <SearchBar
          className="h-9 sticky w-60 border-2 mt-4 mb-4 ml-4 rounded-md"
          onSubmit={handleFormSubmit}
        ></SearchBar>
        {/* </div> */}
        <div className="font-semibold">
          <button onClick={handleDateChange}>-</button>
          {date && (
            <span>{format(new Date(date).toDateString(), "dd MMM yyyy")}</span>
          )}
          <button onClick={handleDateChange}>+</button>
        </div>
        <div>
          <span className="ml-4">Sort by </span>
          <Button
            className="border-2 bg-yellow-100 px-1 rounded-md"
            onClick={handleSortButtonClick}
          >
            Name
          </Button>
        </div>
      </div>
      <div
        className="mobiledatepicker ml-auto mr-4"
        style={{ maxWidth: "250px" }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <MyModal onClick={handleCreateButtonClick} />
      <div className="cards flex mx-8 mt-4">
        <div>
          <p className="mb-4 font-semibold text-sm">Planned</p>
          <div className="overflow-auto h-[calc(100vh-250px)]">
            {filterCards
              .filter((card) => card.status === "planned")
              .map((card, index) => (
                <Card
                  {...card}
                  // onCheckboxClick={(e, indexOfMicroTask) =>
                  //   handleTaskUpdate(e, indexOfMicroTask, index)
                  // }
                  key={index}
                ></Card>
              ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-semibold text-sm">Ongoing</p>
          <div className="overflow-auto h-[calc(100vh-250px)]">
            {filterCards
              .filter((card) => card.status === "ongoing")
              .map((card, index) => (
                <Card
                  {...card}
                  // onCheckboxClick={(e, indexOfMicroTask) =>
                  //   handleTaskUpdate(e, indexOfMicroTask, index)
                  // }
                  key={index}
                ></Card>
              ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-semibold text-sm">Completed</p>
          <div className="overflow-auto h-[calc(100vh-250px)]">
            {filterCards
              .filter((card) => card.status === "completed")
              .map((card, index) => (
                <Card
                  {...card}
                  // onCheckboxClick={(e, indexOfMicroTask) =>
                  //   handleTaskUpdate(e, indexOfMicroTask, index)
                  // }
                  key={index}
                ></Card>
              ))}
          </div>
        </div>
      </div>
      {/* <div className="cardlist mx-4 gap-x-8 gap-y-1">
        {filterCards
          .filter((card) => card.status === "planned")
          .map((card, index) => (
            <Card
            {...card}
            // onCheckboxClick={(e, indexOfMicroTask) =>
              //   handleTaskUpdate(e, indexOfMicroTask, index)
            // }
            key={index}
            ></Card>
          ))}
        </div> */}
    </div>
  );
}

export default CardList;

// how to extract local data from cache in react-query
// momentjs
