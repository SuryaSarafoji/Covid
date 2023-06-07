import React from "react";
import CountryProviderContext from "../Context/CountryContext";
import { useContext } from "react";
import "./Country.css";

function Country({ continentName, classname }) {
  let response3 = useContext(CountryProviderContext);
  let actual = response3.univState ? response3.temp : response3.sta;
  const releventCountries = actual.filter((item) => {
    return item.continent === continentName;
  });

  const ignoreContinentFromCountry = releventCountries.filter((item) => {
    return !(item.country === continentName);
  });

  let clname = classname ? (
    <div>
      <table className={"content-table"}>
        <thead>
          <tr>
            <th>Country</th>
            <th>Population</th>
            <th>Covid Count</th>
          </tr>
        </thead>
        <tbody>
          {ignoreContinentFromCountry.map((item, index) => (
            <tr key={index}>
              <td>{item.country}</td>
              <td>{item.population}</td>
              <td>{item.cases.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="false"></div>
  );

  return clname;
}

export default Country;
