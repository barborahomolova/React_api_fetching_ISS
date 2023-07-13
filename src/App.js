import { useState, useEffect } from "react";
import ReloadButton from "./ReloadButton";

const App = () => {
  const url = "http://api.open-notify.org/iss-now.json";
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [urlMap, setUrlMap] = useState("");

  const getCoordinates = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLatitude(data["iss_position"]["latitude"]);
    setLongitude(data["iss_position"]["longitude"]);
    const iss_long = data["iss_position"]["longitude"];
    const iss_lat = data["iss_position"]["latitude"];

    setUrlMap(`https://mapy.cz/zakladni?x=${iss_long}&y=${iss_lat}&z=8`);
  };

  useEffect(() => {
    getCoordinates();
  }, []);

  return (
    <div className="main-section">
      <h1>Aktuální poloha ISS (International Space Station) </h1>

      <h2>Zeměpisná šířka: {latitude}</h2>

      <h2>Zeměpisná délka: {longitude}</h2>

      <a className="link-mapy" href={urlMap} target="_blank" rel="noreferrer">
        Zobrazit polohu ISS na mapy.cz
      </a>
      <ReloadButton reloadPage={getCoordinates} />
    </div>
  );
};
export default App;
