import React from "react";
import { HiChevronLeft, HiChevronDown } from "react-icons/hi";
import { useState } from "react";
import Country from "./Country";
import "./Continent.css";

function Continents({ name }) {
  const [continentExpanded, continentExpandedFn] = useState(false);
  const continentToggle = () => {
    continentExpandedFn((prevVal) => !prevVal);
  };
  let classnames = continentExpanded ? "inner-class active" : "inner-class";
  return (
    <div className="Continent-Outer">
      <div className="Continents">
        <div className="outer-class">
          {name}
          {continentExpanded ? (
            <HiChevronDown className="spancursor" onClick={continentToggle} />
          ) : (
            <HiChevronLeft className="spancursor" onClick={continentToggle} />
          )}
        </div>
        <div className={classnames}>
          {continentExpanded && (
            <Country continentName={name} classname={continentExpanded} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Continents;
