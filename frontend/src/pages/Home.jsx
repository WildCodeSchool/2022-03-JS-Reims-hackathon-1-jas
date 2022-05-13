import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [search, setSearch] = useState("");
  const wasteTypeArray = [
    "bottes",
    "bouchon de bouteille",
    "bouteille d'eau",
    "carton",
    "cartouche d'encre",
    "chaise",
  ];

  const clearInput = () => {
    setSearch("");
  };

  return (
    <>
      <Header />
      <div className="presentation">
        <h1>Salut, je suis Mister Bin</h1>
        <h2>Votre assistant dans la gestion des déchets !</h2>
      </div>
      <img src="src/assets/images/6.png" alt="mascot" className="mascot" />
      <p className="home-p">Quel déchet souhaitez-vous jeter ?</p>
      <div className="input-search">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Votre recherche"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {search.length === 0 ? (
          <button type="button" className="button-search">
            🔍
          </button>
        ) : (
          <button type="button" className="button-search" onClick={clearInput}>
            ✖️
          </button>
        )}
        <Link to={wasteTypeArray[2].includes(search) ? "/homebin" : "/awaybin"}>
          <ul className="waste-result">
            {wasteTypeArray
              .filter((waste) => search !== "" && waste.includes(search))
              .map((waste) => (
                <li key={waste}>{waste}</li>
              ))}
          </ul>
        </Link>
      </div>
    </>
  );
}
