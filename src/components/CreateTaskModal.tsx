import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import Button from "./Button.tsx";
import CustomText from "./CustomText.tsx";
import generateTimestampId from "./idGenerator.js";
// import Input from "./Input.tsx";
// import {
//   title,
//   description,
//   dueDate,
//   status,
//   addTag,
//   // work on removeTag functionality
// } from "../store/slices/modalValues.ts";
// import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
// import { createDateStrForV6InputFromSections } from "@mui/x-date-pickers/internals";
// import { dueDate } from "../store/slices/modalValues.ts";
import { useState, useEffect } from "react";
// dropdown imports
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  // border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  display: "flex",
  flexDirection: "column",
};

// react hook form

export default function CreateTaskModal({ onCreateClick, onEditClick, card }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [form, setForm] = useState({
    id: "",
    title: "",
    tasks: [],
    createdDate: new Date(),
    dueDate: null,
    status: "",
    tags: "",
  });

  // const [status, setStatus] = useState("");

  const handleInputChange = (name: string, value) => {
    setForm({ ...form, [name]: value });
    // setStatus(value);
  };

  const handleCreate = () => {
    if (card) {
      onEditClick({ ...form, form });
      handleClose();
    } else {
      onCreateClick({ ...form, tags: [], id: generateTimestampId() });
      // console.log(form);
      handleClose();
    }
    // console.log(form.tags);
  };

  useEffect(() => {
    if (card) {
      setForm({ ...card, dueDate: "2024-05-13" });
      handleOpen();
    }
    console.log(card);
  }, [card]);

  console.log(form.dueDate);

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="w-64 border-2 my-2 px-1 bg-cover bg-center bg-blue-200 ml-4 bg-no-repeat addButton rounded-md"
        disabled={false}
      >
        + Add Task
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <CustomText variant="h5" sx={{ mb: 2 }}>
              New Task
            </CustomText>
            <CustomText variant="subtitle1">Title</CustomText>
            <input
              type="text"
              className="border-2"
              placeholder="Enter Title here"
              onChange={(e) => handleInputChange("title", e.target.value)}
              value={form.title}
            />
            {/* <Input type="text" className='border-2' placeholder='Title' onChange={handleChange} value={title}></Input> */}
            {/* <CustomText>Description</CustomText>
            <input
              type="text"
              className="border-2"
              placeholder="Enter Description here"
              onChange={(e) => handleInputChange("description", e.target.value)}
            /> */}
            <div className="flex ">
              <div className="grow">
                <CustomText>Due Date</CustomText>
                <input
                  type="date"
                  className="border-2"
                  placeholder="Select a Date"
                  onChange={(e) => handleInputChange("dueDate", e.target.value)}
                  value={form.dueDate ? form.dueDate : ""}
                />
              </div>
              <div className="">
                <CustomText>Status</CustomText>

                {/* <input
                  type="text"
                  className="border-2"
                  placeholder="Select Status"
                  onChange={(e) => handleInputChange("status", e.target.value)}
                /> */}
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={form.status}
                      label="Select"
                      onChange={(e) =>
                        handleInputChange("status", e.target.value)
                      }
                    >
                      <MenuItem value={"planned"}>Planned</MenuItem>
                      <MenuItem value={"ongoing"}>Ongoing</MenuItem>
                      <MenuItem value={"completed"}>Completed</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
            <CustomText>Tags</CustomText>
            <input
              type="text"
              className="border-2"
              placeholder="Type here"
              onChange={(e) => handleInputChange("tags", e.target.value)}
            />
            <div className="my-2">
              <Button
                className="border-2 border-green-700 bg-green-700 text-white rounded-xl px-1"
                onClick={handleCreate}
              >
                {card ? "Edit" : "Create"}
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

CreateTaskModal.propTypes = {
  onClick: PropTypes.func,
};
