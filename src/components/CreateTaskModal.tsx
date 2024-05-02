import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import Button from "./Button.tsx";
import CustomText from "./CustomText.tsx";
// import Input from "./Input.tsx";
import {
  title,
  description,
  dueDate,
  status,
  addTag,
  // work on removeTag functionality
} from "../store/slices/modalValues.ts";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

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

export default function CreateTaskModal({ onClick }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    // console.log(e.target.value);
    dispatch(title(e.target.value));
  };

  const handleDescriptionChange = (e) => {
    dispatch(description(e.target.value));
  };
  const handleDueDateChange = (e) => {
    // dispatch(dueDate(e.target.value));
    dispatch(dueDate(new Date()));
  };
  const handleStatusChange = (e) => {
    dispatch(status(e.target.value));
  };
  const handleTagsChange = (e) => {
    dispatch(addTag(e.target.value));
  };

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
              onChange={handleTitleChange}
            />
            {/* <Input type="text" className='border-2' placeholder='Title' onChange={handleChange} value={title}></Input> */}
            <CustomText>Description</CustomText>
            <input
              type="text"
              className="border-2"
              placeholder="Enter Description here"
              onChange={handleDescriptionChange}
            />
            <div className="flex ">
              <div className="grow">
                <CustomText>Due Date</CustomText>
                <input
                  type="date"
                  className="border-2"
                  placeholder="Select a Date"
                  onChange={handleDueDateChange}
                />
              </div>
              <div className="">
                <CustomText>Status</CustomText>

                <input
                  type="text"
                  className="border-2"
                  placeholder="Select Status"
                  onChange={handleStatusChange}
                />
              </div>
            </div>
            <CustomText>Tags</CustomText>
            <input
              type="text"
              className="border-2"
              placeholder="Type here"
              onChange={handleTagsChange}
            />
            <div className="my-2">
              <Button
                className="border-2 border-green-700 bg-green-700 text-white rounded-xl px-1"
                onClick={onClick}
              >
                Create
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
