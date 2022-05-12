import { useEffect, useState } from "react";
import axios from "axios";
import Map from "../components/Map";

export default function Home() {
  const [landfill, setLandfill] = useState();
  const [wasteCollection, setWasteCollection] = useState();
  const [search, setSearch] = useState("");

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
        "https://epn-agglo.opendatasoft.com/api/records/1.0/search/?dataset=horaire-decheterie-mobile&q="
      )
      .then((response) => response.data)
      .then((data) => {
        setLandfill(data.records[0]);
      });
  }

  useEffect(() => {
    pickLandfill();
    pickWasteCollection();
  }, []);

  return (
    <>
      <div className="presentation">
        <h1>Je suis Mister Bin</h1>
        <h2>Votre assistant dans la gestion des déchets</h2>
      </div>
      <p>Quel déchet souhaitez-vous jeter ?</p>
      <input
        id="search"
        name="search"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="button"> Rechercher </button>
      {landfill && (
        <p>
          Adresse : {landfill.fields.adresse},{landfill.fields.lieu_de_collecte}
          Longitude:{landfill.fields.longitude}
          Latitude:{landfill.fields.latitude}
        </p>
      )}
      {wasteCollection && (
        <p>
          Type de collecte : {wasteCollection.fields.type_collecte}, Date de
          collecte:{wasteCollection.fields.jour}
        </p>
      )}
      <Map />
    </>
  );
}
