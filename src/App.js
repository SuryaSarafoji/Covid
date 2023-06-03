import "./App.css";
import Search from "./Components/Search";
import Continents from "./Components/Continents";
import { ContinentNames } from "./Data/data";
import React from "react";
import { HiChevronLeft, HiChevronDown } from "react-icons/hi";
import covid from "./covid.svg";

function App() {
  const [continentPressed, continentPressedFn] = React.useState(false);
  return (
    <div>
      <img src={covid} alt="Virus Icon" className="image" />
      <div className="App">
        <Search />
        <div
          className="ContinentToggle"
          onClick={() => {
            continentPressedFn((prevVal) => !prevVal);
          }}
        >
          Covid Report for All Continents
          {continentPressed ? (
            <HiChevronDown className="cursorclass" />
          ) : (
            <HiChevronLeft className="cursorclass" />
          )}
        </div>
        <div
          className={continentPressed ? "inner-classs activee" : "inner-classs"}
        >
          {continentPressed &&
            ContinentNames.map((item, index) => {
              return <Continents key={index} name={item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
