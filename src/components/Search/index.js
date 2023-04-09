import React from "react";
import Input from "../Forms/Input";
import styles from "./Search.module.css";

const Search = ({ handleChange, city }) => {
  return (
    <div className={`${styles.searchContainer} container`}>
      <div className={styles.search}>
        <Input
          type="text"
          placeholder="City"
          onChange={handleChange}
          value={city}
        />
      </div>
    </div>
  );
};

export default Search;
