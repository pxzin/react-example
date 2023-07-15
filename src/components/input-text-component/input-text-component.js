import React from "react";

export const InputTextComponent = ({placeholderText, onThisInputChanges}) => {

  let typingTimeout = undefined; // this is a variable that will hold the interval that will be used to check if the user stopped typing

  //ISSO PODE SER CHAMADO DE DEBOUNCE
  const handleInputChange = (event) => {
    // if the user is typing, clear the interval
    if (typingTimeout) 
      clearInterval(typingTimeout);
    
    // set the interval to check if the user stopped typing
    typingTimeout = setTimeout(() => {
      onThisInputChanges(event.target.value);
    }, 300);
    
  }

  return (
      <input type="text" onChange={handleInputChange} placeholder={placeholderText} />
  )
}