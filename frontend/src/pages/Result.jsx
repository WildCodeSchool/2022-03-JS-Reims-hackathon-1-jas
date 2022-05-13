import { useEffect, useState } from "react";
import axios from "axios";
import Map from "../components/Map";

export default function Result() {
  const [landfill, setLandfill] = useState();
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
    pickWasteCollection();
  }, []);

  return (
    <>
      <p>Hello I am Result</p>
      {wasteCollection && (
        <p className="collect">
          Type de collecte : {wasteCollection.fields.type_collecte}, Date de
          collecte:{wasteCollection.fields.jour}
        </p>
      )}
      {landfill && (
        <Map
          landfillAddress={landfill.fields.nom}
          landfillCity={landfill.fields.commune}
          landfillLongitude={landfill.fields.longitude}
          landfillLatitude={landfill.fields.latitude}
          landfillSchedule={landfill.fields.horaires}
        />
      )}
    </>
  );
}
