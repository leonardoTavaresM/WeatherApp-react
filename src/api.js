export function LOCATION_GET(city) {
  const apiKey = "2fa3b6c245c46bd18becf7ea3958bdab";
  return {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}
