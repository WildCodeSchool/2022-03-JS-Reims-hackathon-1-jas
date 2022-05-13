import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [search, setSearch] = useState("");
  const wasteTypeArray = [
    "bottes",
    "bouchon de bouteille",
    "bouteille d'eau",
    "bouteille de lait",
    "bouteille de vin",
    "carton",
    "cartouche d'encre",
    "chaîne",
    "chaise",
    "chaussures",
  ];

  return (
    <>
      <Header />
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
      <Link to={wasteTypeArray[2].includes(search) ? "/homebin" : "/awaybin"}>
        <button type="button" className="button-search">
          {" "}
          Rechercher{" "}
        </button>
        <ul>
          {wasteTypeArray
            .filter((waste) => search !== "" && waste.includes(search))
            .map((waste) => (
              <li key={waste}>{waste}</li>
            ))}
        </ul>
      </Link>
    </>
  );
}
