import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/header.css";

export default function Header() {
  const name = localStorage.getItem("username");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setsearch] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("username"); // خطوة مهمة جدًا
    navigate("/");
  };
  return (
    <header className="main-header">
      <div className="header">
        <div className="logo">MoGo</div>

        {/* زر فتح القائمة في الموبايل */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </div>

        <nav className={menuOpen ? "active" : ""}>
          <ul className="main-menu">
            <li>
              <HashLink smooth to="/HomePage#adout-section">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/HomePage#section-5">
                Service
              </HashLink>
            </li>
            <li>
              <a
                onClick={(e) => {
                  navigate("/Shopping");
                }}
              >
                showpping
              </a>
            </li>
            <li>
              <HashLink smooth to="/HomePage#main-footer">
                Contact
              </HashLink>
            </li>

            <li>
              <div className="user">
                <i onClick={logout} className="fa-solid fa-circle-user"></i>
                <span className="username">{name}</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
