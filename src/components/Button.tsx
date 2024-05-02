import React from "react";
import PropTypes from "prop-types";

function Button({ onClick, disabled, className, children }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  disabled: false,
  className: "",
};

export default Button;
