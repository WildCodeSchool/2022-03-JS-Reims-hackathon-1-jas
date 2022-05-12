import { Link } from "react-router-dom";

export default function Connect() {
  return (
    <>
      <form>
        Email : <input id="email" name="email" type="email" />
        Mot de passe :{" "}
        <input type="password" id="pass" name="password" required />
      </form>
      <Link to="/mybin">
        <button type="button">Se connecter</button>
      </Link>
    </>
  );
}
