import React from "react";
import PropTypes from "prop-types";
import CustomText from "./CustomText.tsx";

function Sidepanel({ sidebarVisible }) {
  return (
    <div className={`sidebar ${sidebarVisible ? "visible" : "hidden"}`}>
      <CustomText variant="h5" sx={{ mb: 2 }}>
        New Task
      </CustomText>
      <CustomText variant="subtitle1">Title</CustomText>
      <input
        type="text"
        className="border-2"
        placeholder="Enter Title here"
        // onChange={handleTitleChange}
      />
      {/* <Input type="text" className='border-2' placeholder='Title' onChange={handleChange} value={title}></Input> */}
      <CustomText>Description</CustomText>
      <input
        type="text"
        className="border-2"
        placeholder="Enter Description here"
        // onChange={handleDescriptionChange}
      />
      <div className="flex ">
        <div className="grow">
          <CustomText>Due Date</CustomText>
          <input
            type="text"
            className="border-2"
            placeholder="Select a Date"
            // onChange={handleDueDateChange}
          />
        </div>
        <div className="">
          <CustomText>Status</CustomText>

          <input
            type="text"
            className="border-2"
            placeholder="Select Status"
            // onChange={handleStatusChange}
          />
        </div>
      </div>
      <CustomText>Tags</CustomText>
      <input
        type="text"
        className="border-2"
        placeholder="Type here"
        // onChange={handleTagsChange}
      />
    </div>
  );
}

export default Sidepanel;

Sidepanel.propTypes = {
  sidebarVisible: PropTypes.bool,
};
