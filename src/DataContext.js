import { createContext, useState, useEffect, useCallback } from "react";

export const WeatherContext = createContext();

export const DataContext = ({ children }) => {
  const [citySelected, setCitySelected] = useState(null);
  console.log("teste", citySelected);
  return (
    <WeatherContext.Provider value={{ citySelected, setCitySelected }}>
      {children}
    </WeatherContext.Provider>
  );
};
