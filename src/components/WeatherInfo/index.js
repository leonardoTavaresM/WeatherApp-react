import React from "react";
import styles from "./WeatherInfo.module.css";

const WeatherInfo = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.infoBox}>
        {data ? (
          <>
            <div className={styles.wrapperInfo}>
              <p className={styles.info}>
                {data?.name}, {data.sys.country}
              </p>
              <div className={styles.box}>
                <img
                  src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                  alt="icon"
                  className={styles.icon}
                />
                <p className={styles.info}>{data?.weather[0].main}</p>
              </div>
              <p className={styles.info}>{data?.weather[0].description}</p>
            </div>
            <p className={styles.temp}>{data.main.temp} °C</p>
          </>
        ) : (
          <p className={styles.info}>City not found</p>
        )}
      </div>
    </div>
  );
};

export default WeatherInfo;
