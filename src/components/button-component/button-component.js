import React from "react";

export const ButtonComponent = ({ label, onThisButtonClick }) => {
 
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
