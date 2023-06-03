import React from "react";
import axios from "axios";
import SpecificCountrySearch from "./SpecificCountrySearch";
import "./Search.css";
import { HiSearchCircle, HiXCircle } from "react-icons/hi";

function Search() {
  const [countrySearch, countrySearchFn] = React.useState("");
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
  const [specificCountry, specificCountryFn] = React.useState();
  const specificCountryData = async () => {
    response = await axios.request(options);

    if (response.data.response[0] !== undefined) {
      specificCountryFn(response.data.response[0]);
    } else {
      alert("Enter Proper Country Name");
    }
  };

  return (
    <div className="FullBlock">
      <form onSubmit={submitFn} className="Block">
        <input
          className="Search"
          type="text"
          placeholder="Enter Country"
          onChange={(e) => {
            countrySearchFn(e.target.value);
          }}
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
