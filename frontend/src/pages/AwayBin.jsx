import { useEffect, useState } from "react";
import axios from "axios";
import Map from "../components/Map";
import Header from "../components/Header";

export default function AwayBin() {
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
      <h1>Votre recherche</h1>
      <p>
        Un(e) chaise est un déchet à jeter en déchetterie, la carte ci-dessous
        vous indique la déchetterie la plus proche de vous.
      </p>
      <div className="did-you-know">
        <h3>Le saviez-vous ?</h3>
        <p>
          La France produit chaque année 14 millions de tonnes de déchets de
          bois. Contrairement aux idées reçues, le recyclage du bois ne permet
          pas de créer de la pâte à papier. Les déchets de bois ont deux
          débouchés principaux : la valorisation matière dans l’industrie des
          panneaux de particules et la valorisation énergétique en chaufferie.
        </p>
      </div>

      {landfill && (
        <>
          <Map
            landfillAddress={landfill.fields.nom}
            landfillCity={landfill.fields.commune}
            landfillLongitude={landfill.fields.longitude}
            landfillLatitude={landfill.fields.latitude}
            landfillSchedule={landfill.fields.horaires}
          />
          <img
            src="/src/assets/images/10.png"
            alt="mascot-showing"
            className="mascot-showing"
          />
        </>
      )}
    </>
  );
}
