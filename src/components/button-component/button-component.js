import React from "react";

export const ButtonComponent = ({ label, onThisButtonClick }) => {
  //ensure that the label is a string with 5 characters or less
  //if there is more than 5 characters, cut it
  if (typeof label !== "string" || label.length > 5) {
    label = label.substring(0, 5);
  }

  return (
    <button
      onClick={(e) => {
        if (onThisButtonClick && typeof onThisButtonClick === "function") {
          onThisButtonClick(e);
        }
      }}
    >
      <span>{label}</span>
    </button>
  );
};
