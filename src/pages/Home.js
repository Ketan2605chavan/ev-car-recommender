// src/pages/Home.js
import React from "react";
import EVCard from "../components/EVCard";
import { evData } from "../data";


const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-left">
          <h1 id="hero-title">
            Discover the best electric cars for your needs
          </h1>
          <p className="small">
            Explore curated electric vehicles with range, price, and features at
            a glance. Use the recommender to match EVs to your budget and driving style.
          </p>
        </div>

        <div className="hero-tip">
          <div className="tip-box">
            <strong>💡 Tip:</strong>
            <p className="small">
              Click <b>Recommend</b> to get suggestions tailored to your budget
              and range needs.
            </p>
          </div>
        </div>
      </section>

      {/* EV Flashcards */}
      <section style={{ marginTop: 28 }}>
        <h2 style={{ color: "#00693f" }}>Flashcards — EV Highlights</h2>
        <div className="ev-grid" role="list">
          {Array.isArray(evData) && evData.length > 0 ? (
            evData.map((ev) => <EVCard key={ev.name} ev={ev} />)
          ) : (
            <p>No EV data available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
