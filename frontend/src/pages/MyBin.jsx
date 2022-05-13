import { useEffect, useState } from "react";
import axios from "axios";
import Map from "../components/Map";
import Header from "../components/Header";

export default function MyBin() {
  const [toggleGreen, setToggleGreen] = useState(true);
  const [toggleYellow, setToggleYellow] = useState(true);
  const [landfill, setLandfill] = useState();

  function pickLandfill() {
    axios
      .get(
        "https://epn-agglo.opendatasoft.com/api/records/1.0/search/?dataset=assist_vocaux_dechetterie&q="
      )
      .then((response) => response.data)
      .then((data) => {
        setLandfill(data.records[4]);
      });
  }

  useEffect(() => {
    pickLandfill();
  }, []);

  return (
    <>
      <Header />
      <h2>Bonjour Simon !</h2>
      <img
        src="src/assets/images/mister-bin-welcome.png"
        alt="mascot-welcome"
        className="mascot-welcome"
      />
      <main className="main-mybin">
        <div className="around-me">
          Vous pouvez retrouvez sur la carte tous les points de récoltes autour
          de vous.
          <div className="map-container">
            {landfill && (
              <Map
                landfillAddress={landfill.fields.nom}
                landfillCity={landfill.fields.commune}
                landfillLongitude={landfill.fields.longitude}
                landfillLatitude={landfill.fields.latitude}
                landfillSchedule={landfill.fields.horaires}
              />
            )}
          </div>
        </div>
        <div className="notification-manager-container">
          <h4>Gestion des notifications </h4>
          <h5>Souhaitez-vous modifiez vos notifications?</h5>
          <div className="notification-manager">
            <button
              type="button"
              onClick={() => setToggleGreen((prevState) => !prevState)}
            >
              {toggleGreen
                ? "Collecte de déchets ménagers : OUI"
                : "Collecte de déchets ménagers : NON"}
            </button>
            <button
              type="button"
              onClick={() => setToggleYellow((prevState) => !prevState)}
            >
              {toggleYellow
                ? "Collecte de déchets recyclables : OUI"
                : "Collecte de déchets recyclables : NON"}
            </button>
            <button type="button">Modifiez votre adresse</button>
          </div>
        </div>
      </main>
    </>
  );
}
