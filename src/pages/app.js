import React, {useState} from "react";
import { CityContainer } from "../components/city-container/city-container";
import { ButtonComponent } from "../components/button-component/button-component";
import { InputTextComponent } from "../components/input-text-component/input-text-component";
export const App = () => {

  const shortcutCities = ["Vitória","São Paulo", "Rio de Janeiro", "Curitiba"];
  // HOOKS
  const [selectedCity, setSelectedCity] = useState();

  //DEFAULT CITIES BUTTONS
  const handleButtonClick = (event) => {
    setSelectedCity(event.target.innerText);
  }


  //INPUT TEXT CITIES
  const handleInputTextChange = (value) => {
    setSelectedCity(value);
  }

  return (
    <section>
      <h1>Weather Report</h1>
      <div>
        <CityContainer selectedCity={selectedCity} />
      </div>
      <div>
        {shortcutCities.map((city) => 
          <ButtonComponent key={city} label={city} onThisButtonClick={handleButtonClick} />
        )}  
      </div>
      <div>
        <InputTextComponent placeholderText={"Digite uma cidade"} onThisInputChanges={handleInputTextChange} />
      </div>
      <img src="https://static.jojowiki.com/images/thumb/8/8e/latest/20220307143604/Weather_Report_Infobox_Anime.png/400px-Weather_Report_Infobox_Anime.png" ></img>

    </section>
    
  );
}