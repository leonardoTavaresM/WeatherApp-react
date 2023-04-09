import React, { useContext } from "react";
import { WeatherContext } from "../../DataContext";
import * as S from "./style";

const Body = ({ children }) => {
  const { citySelected } = useContext(WeatherContext);
  console.log("citySelected", citySelected);
  return (
    <S.Body>
      <S.BackgroundImg
        src={`https://source.unsplash.com/1600x900/?${
          citySelected ? citySelected : "turin"
        }`}
        alt="background"
      />
      {children}
    </S.Body>
  );
};

export default Body;
