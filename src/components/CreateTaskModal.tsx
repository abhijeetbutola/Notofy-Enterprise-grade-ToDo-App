import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "./Button.tsx";
import CustomText from "./CustomText.tsx";
import generateTimestampId from "./idGenerator.js";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// dropdown imports
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

export default function CreateTaskModal({
  onCreateClick,
  onEditClick,
  card,
  closeModal,
  openModal,
  openModalFunc,
}) {
  // const [open, setOpen] = React.useState(false);

  const [form, setForm] = useState({
    id: "",
    title: "",
    tasks: [],
    createdDate: new Date(),
    dueDate: null,
    status: "",
    tags: "",
  });

  const handleInputChange = (name: string, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleCreate = () => {
    if (card) {
      onEditClick({ ...form, form });
      closeModal();
    } else {
      onCreateClick({ ...form, tags: [], id: generateTimestampId() });
      closeModal();
    }
  };

  useEffect(() => {
    if (card) {
      setForm({ ...card, dueDate: "2024-05-13" });
    } else
      setForm({
        id: "",
        title: "",
        tasks: [],
        createdDate: new Date(),
        dueDate: null,
        status: "",
        tags: "",
      });
    console.log(card);
  }, [card]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={closeModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <CustomText variant="h5" color="black" align="left">
              New Task
            </CustomText>
            <CustomText variant="h5" color="black" align="left">
              Title
            </CustomText>
            <input
              type="text"
              className="border-2"
              placeholder="Enter Title here"
              onChange={(e) => handleInputChange("title", e.target.value)}
              value={form.title}
            />
            <div className="flex ">
              <div className="grow">
                <CustomText variant="h5" color="black" align="left">
                  Due Date
                </CustomText>
                <input
                  type="date"
                  className="border-2"
                  placeholder="Select a Date"
                  onChange={(e) => handleInputChange("dueDate", e.target.value)}
                  value={form.dueDate ? form.dueDate : ""}
                />
              </div>
              <div className="">
                <CustomText variant="h5" color="black" align="left">
                  Status
                </CustomText>
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
            <CustomText variant="h5" color="black" align="left">
              Tags
            </CustomText>
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
  onCreateClick: PropTypes.func,
  onEditClick: PropTypes.func,
  card: PropTypes.object,
  closeModal: PropTypes.any,
  openModal: PropTypes.any,
  openModalFunc: PropTypes.func,
};
