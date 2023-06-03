import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const CountryProviderContext = createContext();

const options = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  headers: {
    "X-RapidAPI-Key": "b751c60813msh90de968b12fe899p18ee3djsn99acc82254a0",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

const Provider = ({ children }) => {
  const [sta, staFn] = useState();

  useEffect(() => {
    const apiCall = async () => {
      const request = await axios.request(options);
      staFn(request.data.response);
    };
    apiCall();
  }, []);

  return (
    <CountryProviderContext.Provider value={sta}>
      {children}
    </CountryProviderContext.Provider>
  );
};

export { Provider };
export default CountryProviderContext;
