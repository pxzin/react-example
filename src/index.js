// App

import React from "react";
import ReactDOM from "react-dom";
import { ButtonComponent } from "./components/button-component/button-component";

//ESPERA UM EVENTO DE CLICK
const HandleClickButton = (e) => {
  alert(`Button clicked: ${e.target.innerText}`);
};

const App = () => {
  return (
    <section>
      <h1>My React App!</h1>
      <div>
        <ButtonComponent label="Btn 1" onThisButtonClick={HandleClickButton} />
        <ButtonComponent label="Btn 2" onThisButtonClick={HandleClickButton} />
        <ButtonComponent label="Btn 3" onThisButtonClick={HandleClickButton} />
        <ButtonComponent label="Btn 4" onThisButtonClick={HandleClickButton} />
        <ButtonComponent label="Btn 5" onThisButtonClick={HandleClickButton} />
        <ButtonComponent label="Btn 6" onThisButtonClick={HandleClickButton} />
      </div>
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
