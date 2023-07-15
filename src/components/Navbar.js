import { Link } from "react-router-dom";
import "./Navbar.css";
import { GoSun } from "react-icons/go";
import { BiSolidMoon } from "react-icons/bi";

export default function Navbar(props) {
  const { theme, setTheme } = props;


  function ToggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }

  }


  return (
    <nav>
      <div className="nav-container">
        <div className="nav-grid">
          <Link to="/" className="logo">
            <h1>Blog Application</h1>
          </Link>
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <span className="icon" onClick={ToggleTheme}>
              <div></div>
              {theme === "light" ? <GoSun /> : <BiSolidMoon />}
            </span>
          </ul>
        </div>
      </div>
    </nav>
  );
}
