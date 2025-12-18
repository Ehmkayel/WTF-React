import { useState } from "react";
import { NavData } from "../../data/NavLinks";
import TopBar from "./TopBar/TopBar";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "../../assets/icons/logo.svg";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Button from "../ReUsables/Button/Button";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <TopBar />
      <header className="header">
        <div className="header-container">
          <nav className="navbar">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Edunity Logo" className="logo-image" />
              </Link>
            </div>

            <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              {NavData.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`nav-link ${
                    location.pathname === item.href ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="nav-actions">
              <Button rightSection={<FaArrowRight color="white"/>}>Create Account</Button>

              <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
