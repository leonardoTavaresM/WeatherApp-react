import React, { useEffect, useState } from "react";
import { useDebounce } from "../../utils";
import * as S from "./style";
// import {useDebounce} from './'

const Search = () => {
  const apiKey = "2fa3b6c245c46bd18becf7ea3958bdab";

  const [data, setData] = useState();
  const [citySearch, setCitySearch] = useState("");

  const debounceCity = useDebounce(citySearch);

  function handleChange(value) {
    setCitySearch(value);
  }

  useEffect(() => {
    if (debounceCity) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${debounceCity}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [debounceCity]);
  console.log(debounceCity);
  // console.log(data);
  return (
    <S.InputWrapper>
      <S.Input
        type="text"
        onChange={({ target }) => handleChange(target.value)}
      />
    </S.InputWrapper>
  );
};

export default Search;
