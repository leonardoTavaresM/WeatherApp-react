import React, { useState, useEffect } from "react";
import { useDebounce } from "../utils/functions";

import * as S from "./style";

const Search = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState("Turin");
  const debounce = useDebounce(city);

  const apiKey = "2fa3b6c245c46bd18becf7ea3958bdab";

  function handleChange({ target }) {
    console.log("target", target.value);
    setCity(target.value);
  }

  useEffect(() => {
    async function dataFetch() {
      try {
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${debounce}&appid=${apiKey}`
        );
        let dataResponse = await response.json();
        setData(dataResponse);
      } catch (error) {}
    }
    dataFetch();
  }, [debounce]);

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Search;
