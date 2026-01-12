import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isLoggedIn, onLogout }) {
  const nav = useNavigate();

  const handleLogout = () => {
    onLogout?.();
    nav("/");
  };

  return (
    <header className="navbar">
      <Link className="brand" to="/">
        <div className="logo">EV</div>
        <div>
          <div style={{ fontWeight: 700 }}>EV Recommender</div>
          <small style={{ opacity: 0.85, display: "block" }}>Find the right electric car</small>
        </div>
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/recommend">Recommend</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup" className="cta-btn secondary" style={{ textDecoration: "none", color:"#fff", padding: "8px 12px" }}>Signup</Link>
        {isLoggedIn && <button className="cta-btn" onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
}
