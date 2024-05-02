import React from "react";
import "../styles/RightBar.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../store/slices/calendarSlice.ts";
import { RootState } from "../store/store.ts";

function RightBar() {
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.calendar.value);
  const handleChange = (e) => {
    // console.log(e.$d);
    dispatch(setDate(e.$d));
  };

  return (
    <>
      <div className="rightbar rounded-md my-4 bg-white shadow-md mr-4 flex">
        <div className="flex">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["StaticDatePicker"]}>
              <DemoItem>
                <StaticDatePicker
                  value={dayjs(date)}
                  onChange={handleChange}
                  slotProps={{ actionBar: { actions: [] } }}
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
