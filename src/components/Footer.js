import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>EV Recommender</strong>
        <div className="small">Green choices for smarter mobility</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <small>Made with ❤️ • {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}
