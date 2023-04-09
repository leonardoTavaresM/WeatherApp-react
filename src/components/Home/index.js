import { useContext, useEffect, useState } from "react";
import { LOCATION_GET } from "../../api";
import { WeatherContext } from "../../DataContext";
import useFetch from "../../Hooks/useFetch";
import WeatherInfo from "../WeatherInfo";
import Search from "../Search";
import styles from "./Home.module.css";
import { useDebounce } from "../utils/functions";

const Home = () => {
  const { request, data, loading, error } = useFetch();

  const [city, setCity] = useState("");
  const debounce = useDebounce(city);
  const { setCitySelected } = useContext(WeatherContext);
  function handleChange({ target }) {
    console.log("target", target.value);
    setCity(target.value);
  }

  useEffect(() => {
    const { url, options } = LOCATION_GET(debounce);
    request(url, options);
  }, [debounce, request]);

  useEffect(() => {
    if (data?.length > 0) setCitySelected(debounce);
  }, [data, setCitySelected, debounce]);

  console.log("dataaaaa", data);

  return (
    <div className={styles.home}>
      <Search handleChange={handleChange} city={city} />
      <WeatherInfo data={data} />
    </div>
  );
};

export default Home;
