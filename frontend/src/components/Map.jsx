import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useGeolocation from "react-hook-geolocation";

const position = [49.2571662, 4.0200121];

function Map() {
  const geolocation = useGeolocation();

  position[0] = geolocation.latitude ?? position[0];
  position[1] = geolocation.longitude ?? position[1];

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
        <Popup>Voici Quartier Libre.</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
