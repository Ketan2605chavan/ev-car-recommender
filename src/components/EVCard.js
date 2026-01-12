import React from "react";

const EVCard = ({ ev }) => {
  return (
    <div className="ev-card" role="listitem">
      <img
        src={ev.image}
        alt={ev.name}
        className="ev-image"
        loading="lazy"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/300x180?text=EV+Image";
        }}
      />

      <h3>{ev.name}</h3>
      <p>Range: {ev.range} km</p>
      <p>Price: ₹{ev.price}</p>
      <p>{ev.description}</p>
    </div>
  );
};

export default EVCard;
