import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { GoSun } from "react-icons/go";
import { BiSolidMoon } from "react-icons/bi";

export default function Navbar(props) {
  const { theme, setTheme } = props;
  const [openMenu, setOpenMenu] = useState(false)


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
          <div className="hamburg" onClick={()=>(
            setOpenMenu(!openMenu)
          )}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={openMenu ? "open" : ""}>
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
