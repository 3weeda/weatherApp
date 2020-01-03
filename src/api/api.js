import axios from "axios";

const baseUrl = "https://dataservice.accuweather.com";
const apiKey = "Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS";

export const getData = async () => await axios.get(`${baseUrl}/locations/v1/topcities/50?apikey=${apiKey}`);

export const getCurrentCity = async id =>
  await axios.get(
    `${baseUrl}/forecasts/v1/daily/1day/${id}?apikey=${apiKey}&details=true`
  );
