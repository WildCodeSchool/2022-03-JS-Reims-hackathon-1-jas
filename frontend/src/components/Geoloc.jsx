import useGeolocation from "react-hook-geolocation";

function Geoloc() {
  const geolocation = useGeolocation();

  return !geolocation.error ? (
    <ul>
      <li>Latitude: {geolocation.latitude}</li>
      <li>Longitude: {geolocation.longitude}</li>
      <li>Location accuracy: {geolocation.accuracy}</li>
    </ul>
  ) : (
    <p>No geolocation, sorry.</p>
  );
}

export default Geoloc;
