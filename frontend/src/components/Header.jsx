import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <div>
      <Link to="/connect" className="connect">
        <img src="/src/assets/images/login-person-beige-24.png" alt="login" />
      </Link>
      <Link to="/">
        <h1>Mister Bin</h1>
      </Link>
    </div>
  );
}
