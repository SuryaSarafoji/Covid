import React, { useEffect, useContext } from "react";
import axios from "axios";
import SpecificCountrySearch from "./SpecificCountrySearch";
import "./Search.css";
import { HiSearchCircle, HiXCircle } from "react-icons/hi";
import CountryProviderContext from "../Context/CountryContext";

function Search() {
  const [countrySearch, countrySearchFn] = React.useState("");
  let context = useContext(CountryProviderContext);

  const submitFn = (e) => {
    e.preventDefault();
    if (countrySearch) {
      specificCountryData();
      countrySearchFn("");
    } else {
      alert("Enter Some Country");
    }
  };

  const options = {
    method: "GET",
    url: `https://covid-193.p.rapidapi.com/statistics?country=${countrySearch}`,
    headers: {
      "X-RapidAPI-Key": "b751c60813msh90de968b12fe899p18ee3djsn99acc82254a0",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  let response;
  let [specificCountry, specificCountryFn] = React.useState();

  const specificCountryData = async () => {
    response = await axios.request(options);

    if (response.data.response[0] !== undefined) {
      specificCountryFn(response.data.response[0]);
    } else {
      alert("Enter Proper Country Name");
    }
  };

  const onChangeFn = (e) => {
    countrySearchFn(e.target.value);
  };

  useEffect(() => {
    let tempVar = countrySearch.split("");
    context.tempFn(context.sta);
    if (tempVar.length > 2) {
      context.univStateFn(true);
      let arr = context.sta.filter((item) =>
        item.country.toLowerCase().includes(countrySearch.toLowerCase())
      );

      context.tempFn(arr);
    } else {
      context.univStateFn(false);
    }
  }, [countrySearch]);
  return (
    <div className="FullBlock">
      <form onSubmit={submitFn} className="Block">
        <input
          className="Search"
          type="text"
          placeholder="Enter Country"
          onChange={onChangeFn}
          value={countrySearch}
        />

        <button className="Submit">
          <HiSearchCircle className="icon" />
        </button>
      </form>

      {specificCountry && <SpecificCountrySearch data={specificCountry} />}
      {specificCountry && (
        <button
          onClick={() => {
            specificCountryFn();
          }}
          className="Clear"
        >
          <HiXCircle className="ClearIcon" />
        </button>
      )}
    </div>
  );
}

export default Search;
