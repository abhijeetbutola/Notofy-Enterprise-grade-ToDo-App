import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

function CustomText({
  variant = "body1",
  color = "inherit",
  align = "left",
  children,
  ...otherProps
}) {
  return (
    <Typography variant={variant} color={color} align={align} {...otherProps}>
      {children}
    </Typography>
  );
}

CustomText.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
  ]),
  color: PropTypes.string,
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  children: PropTypes.node.isRequired,
};

export default CustomText;
