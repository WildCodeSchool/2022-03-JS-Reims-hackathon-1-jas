import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
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
    </>
  );
}
