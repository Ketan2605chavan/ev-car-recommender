import React, { useState } from "react";
import { evData } from "../data";

import EVCard from "../components/EVCard";
import { useNavigate } from "react-router-dom";

export default function Recommend({ isLoggedIn }) {
  const nav = useNavigate();
  const [budget, setBudget] = useState("");
  const [minRange, setMinRange] = useState(150);

  // simple naive recommender mapping budgets to a subset for demo
  const recommend = () => {
    if (!isLoggedIn) {
      if (!window.confirm("You are not logged in. Login to save recommendations. Go to login?")) return;
      nav("/login");
      return;
    }
    // demo: filter by minRange (not real numeric ranges in data)
    const picks = evData.filter((_, i) => {
      // a simple deterministic pick based on budget string
      if (!budget) return true;
      if (budget.toLowerCase().includes("low")) return i % 2 === 0;
      if (budget.toLowerCase().includes("mid")) return i % 2 === 1;
      return true;
    });
    return picks;
  };

  const results = recommend();

  return (
    <div className="container">
      <h2>Find recommended EVs</h2>
      <div className="card-form">
        <label>Budget (try: Low / Mid / High)</label>
        <input value={budget} onChange={(e)=>setBudget(e.target.value)} placeholder="e.g., Mid" />
        <label>Minimum Range (km)</label>
        <input type="number" value={minRange} onChange={(e)=>setMinRange(e.target.value)} />
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button className="cta-btn" onClick={() => { /* recompute by re-render */ }}>Show Recommendations</button>
        </div>
      </div>

      <section style={{ marginTop: 12 }}>
        <h3>Suggestions</h3>
        <div className="ev-grid">
          {results && results.length ? (
            results.map(ev => <EVCard key={ev.name} ev={ev} />)
          ) : (
            <div className="center small">No recommendations — try changing filters.</div>
          )}
        </div>
      </section>
    </div>
  );
}
