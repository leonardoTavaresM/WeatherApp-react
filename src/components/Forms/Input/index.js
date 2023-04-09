import React from "react";

import styles from "./Input.module.css";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={styles.input}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
