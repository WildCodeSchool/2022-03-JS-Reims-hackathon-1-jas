import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to="/connect">
      <img
        src="/src/assets/images/login-person-shadow.png"
        alt="login"
        className="login-image"
      />
    </Link>
  );
}
