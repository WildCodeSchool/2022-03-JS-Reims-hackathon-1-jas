import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Connect() {
  return (
    <>
      <Header />
      <img
        src="src/assets/images/mister-bin-laptop.png"
        alt="mascot-laptop"
        className="mascot-laptop"
      />
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
        <button type="button" className="button-connect">
          Se connecter
        </button>
      </Link>
    </>
  );
}
