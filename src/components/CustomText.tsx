import React from "react";
import "../App.css"; // Import the CSS file where the font is defined

interface CustomTextProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  align?: "left" | "center" | "right" | "justify";
  children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({
  variant,
  color,
  align,
  children,
}) => {
  // Determine the HTML tag based on the variant
  const Tag = variant.startsWith("h") ? variant : "p";

  // Apply styles based on the props
  const styles = {
    color: color,
    textAlign: align as "left" | "center" | "right" | "justify",
    fontFamily: "Roboto, sans-serif", // Apply the font
  };

  return <Tag style={styles}>{children}</Tag>;
};

export default CustomText;
