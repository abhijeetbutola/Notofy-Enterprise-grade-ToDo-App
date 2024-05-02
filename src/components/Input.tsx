import React from "react";
import PropTypes from "prop-types";

function Input({ type, value, onChange, placeholder, className, ...rest }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input ${className}`}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  value: "",
  placeholder: "",
  className: "",
};

export default Input;
