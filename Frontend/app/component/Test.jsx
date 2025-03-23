import React from 'react';
import './App.css'; // Import your CSS file for styling

const Test = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h2>Day 359 / 365</h2>
      </header>
      <div className="ride-container">
        <div className="map-container">
          <div className="pickup-location">
            <h3>Where to?</h3>
            <input type="text" placeholder="Enter your destination" />
            <button className="search-button">Search</button>
          </div>
          <div className="map-view">
            {/* Placeholder for map */}
            <div className="map" />
          </div>
        </div>
        <div className="ride-complete">
          <h3>Ride Completed!</h3>
          <div className="rating">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
          </div>
          <p>Rate your experience with Mira Daze</p>
          <button className="ride-again-button">Book Again</button>
        </div>
      </div>
    </div>
  );
};

export default Test;