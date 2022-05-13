import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Connect() {
  return (
    <>
      <Header />
      <form className="login">
        <div className="email">
          Email : <input id="email" name="email" type="email" />
        </div>
        <div className="password">
          Mot de passe :{" "}
          <input type="password" id="pass" name="password" required />
        </div>
      </form>
      <Link to="/mybin">
        <button type="button" className="button">
          Se connecter
        </button>
      </Link>
    </>
  );
}
