import { useEffect, useState } from "react";
import axios from "axios";
import Map from "../components/Map";
import Header from "../components/Header";

export default function MyBin() {
  const [Toggle, setToggle] = useState(true);
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
      <main className="main-mybin">
        <div className="around-me">
          Voici les différents points de récoltes autour de vous
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
        <div className="notifications">
          <h4>Gestion des notifications</h4>
          Souhaitez-vous modifiez vos notifications
        </div>
        <button
          type="button"
          className="notification-verte"
          onClick={() => setToggle((prevState) => !prevState)}
        >
          {Toggle
            ? "Recevoir un rappel pour la collecte de déchets ménagers"
            : "Ne pas recevoir de rappels pour la collecte de déchets ménagers"}
        </button>
        <button
          type="button"
          onClick={() => setToggle((prevState) => !prevState)}
        >
          {Toggle
            ? "Recevoir un rappel pour la collecte de déchets recyclables"
            : "Ne pas recevoir de rappels pour la collecte de déchets recyclables"}
        </button>
        <button type="button">Modifiez votre adresse</button>
      </main>
    </>
  );
}
