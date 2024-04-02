import React from "react";
import "../styles/RightBar.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { setDate } from "../store/slices/calendarSlice.ts";

function RightBar() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    // console.log(e.$d);
    dispatch(setDate(e.$d));
  };

  return (
    <>
      <div className="rightbar">
        <p>Right SideBar</p>
        <div className="calendar">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["StaticDatePicker"]}>
              <DemoItem>
                <StaticDatePicker
                  defaultValue={dayjs(new Date())}
                  onChange={handleChange}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
    </>
  );
}

export default RightBar;
