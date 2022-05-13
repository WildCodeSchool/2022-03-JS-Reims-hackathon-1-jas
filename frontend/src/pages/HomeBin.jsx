import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

export default function HomeBin() {
  const [wasteCollection, setWasteCollection] = useState();

  function pickWasteCollection() {
    axios
      .get(
        "https://epn-agglo.opendatasoft.com/api/records/1.0/search/?dataset=collecte-des-dechets&q="
      )
      .then((response) => response.data)
      .then((data) => {
        setWasteCollection(data.records[0]);
      });
  }

  useEffect(() => {
    pickWasteCollection();
  }, []);

  return (
    <>
      <Header />
      <h1>Votre recherche</h1>
      <p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Pas besoin de vous déplacer ! La bouteille d'eau est un déchet à jeter
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        dans la poubelle d'ordures recyclables de votre immeuble (poubelle
        jaune). Voici ci-dessous les dates de levée des poubelles jaunes dans
        votre commune :
      </p>
      <div className="flex-container">
        <img
          src="src/assets/images/mister-bin-quiet.png"
          alt="mister-bin-quiet"
          className="mascot-quiet"
        />
      </div>
      {wasteCollection && (
        <ul className="waste-collection">
          <li>
            Type de collecte : {wasteCollection.datasetid},{" "}
            {wasteCollection.fields.type_collecte.toLowerCase()}
          </li>
          <li>Semaine paire ou impaire : {wasteCollection.fields.semaine}</li>
          <li>Dates de collecte : {wasteCollection.fields.jour}</li>
        </ul>
      )}
      <div>
        <details>
          <summary>Le saviez-vous ?</summary>
          <p className="did-you-know">
            Un Français consomme en moyenne 96 bouteilles plastiques par an !
            Chaque jour, 25 millions de bouteilles sont jetées dans le pays.
            Pour en finir avec ces chiffres vertigineux, sachez enfin que la
            production de plastique a été multipliée par 50 en 50 ans en France.
          </p>
        </details>
      </div>
    </>
  );
}
