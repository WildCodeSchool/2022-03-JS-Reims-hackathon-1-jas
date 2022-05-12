import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useGeolocation from "react-hook-geolocation";
import PropTypes from "prop-types";

const position = [49.2571662, 4.0200121];
const geoposition = [49.2571662, 4.0200121];

function Map({
  landfillAddress,
  landfillCity,
  landfillLongitude,
  landfillLatitude,
  landfillSchedule,
}) {
  const geolocation = useGeolocation();

  position[0] = landfillLongitude ?? position[0];
  position[1] = landfillLatitude ?? position[1];
  geoposition[0] = geolocation.latitude ?? geoposition[0];
  geoposition[1] = geolocation.longitude ?? geoposition[1];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "300px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Adresse : {landfillAddress},{landfillCity} <br />
          Horaires : {landfillSchedule}
        </Popup>
      </Marker>
      <Marker position={geoposition}>
        <Popup>Voici Quartier Libre.</Popup>
      </Marker>
    </MapContainer>
  );
}

Map.propTypes = {
  landfillAddress: PropTypes.string.isRequired,
  landfillCity: PropTypes.string.isRequired,
  landfillLongitude: PropTypes.string.isRequired,
  landfillLatitude: PropTypes.string.isRequired,
  landfillSchedule: PropTypes.string.isRequired,
};

export default Map;
