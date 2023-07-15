import React from "react";

export const CityContainer = ({selectedCity}) => {

  const defaultCity = "São Paulo"


  return (
    <div className="city-container">
      <h2>Cidade Selecionada: {selectedCity ? selectedCity : defaultCity}</h2>
    </div>
  );
}