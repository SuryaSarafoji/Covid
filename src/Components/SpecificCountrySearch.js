import React from "react";
import "./SpecificCountrySearch.css";

function SpecificCountrySearch({ data }) {
  return (
    <div>
      {data.country} has a total population of <span>{data.population}</span>{" "}
      and total Covid case count is <span>{data.cases.total}</span>
    </div>
  );
}
export default SpecificCountrySearch;
