import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/connect" className="connect">
        <img
          src="/src/assets/images/login-person-beige-24.png"
          alt="login"
          className="login-image"
        />
      </Link>
      <Link to="/">
        <h1>Mister Bin</h1>
      </Link>
    </div>
  );
}
