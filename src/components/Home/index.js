import { useEffect, useState } from "react";
import { LOCATION_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Input from "../Forms/Input";
import { useDebounce } from "../utils/functions";

const Home = () => {
  const { request, data, loading, error } = useFetch();

  // const [data, setData] = useState({});
  const [city, setCity] = useState("Turin");
  const debounce = useDebounce(city);

  function handleChange({ target }) {
    console.log("target", target.value);
    setCity(target.value);
  }

  useEffect(() => {
    const { url, options } = LOCATION_GET(debounce);
    request(url, options);
  }, [debounce, request]);

  console.log("dataaaaa", data);

  return (
    <div>
      <Input
        type="text"
        placeholder="City"
        onChange={handleChange}
        value={city}
      />
    </div>
  );
};

export default Home;
