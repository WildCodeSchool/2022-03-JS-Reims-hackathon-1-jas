import { useEffect, useState } from "react";
import axios from "axios";

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
      <h1>Votre recherche</h1>
      <p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Pas besoin de se déplacer ! Un(e) bouteille d'eau est un déchet à jeter
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        dans la poubelle d'ordures recyclables de votre immeuble (poubelle
        jaune). Voici ci-dessous les dates de levée des poubelles jaunes dans
        votre commune :
      </p>
      {wasteCollection && (
        <ul>
          <li>
            Type de collecte : {wasteCollection.datasetid},{" "}
            {wasteCollection.fields.type_collecte.toLowerCase()}
          </li>
          <li>Semaine paire ou impaire : {wasteCollection.fields.semaine}</li>
          <li>Dates de collecte : {wasteCollection.fields.jour}</li>
        </ul>
      )}
    </>
  );
}
