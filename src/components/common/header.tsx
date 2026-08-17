import { useState } from "react";
import { NavLink } from "react-router";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-container">
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <nav className={`site-nav ${isOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>  

          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>

          <NavLink to="/social" onClick={() => setIsOpen(false)}>
            Social Media
          </NavLink>
        </nav>
      </div>
    </header>
  );
}