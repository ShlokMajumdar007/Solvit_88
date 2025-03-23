"use client"
import React, { useState } from 'react';

const Home = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOptions(true);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header Section */}
      <header className="bg-green-600 p-4 text-black flex justify-between items-center">
        <div className="flex gap-10">
          <div className="flex gap-2 items-center">
            <label htmlFor="">From</label>
            <div className="active:outline-none">
              <input
                className="border-2 rounded"
                type="text"
                value={from}
                onChange={handleFromChange}
              />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <label htmlFor="">To</label>
            <div className="active:outline-none">
              <input
                className="border-2 rounded"
                type="text"
                value={to}
                onChange={handleToChange}
              />
            </div>
          </div>
          <button
            className="bg-green-800 text-white p-2 rounded"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </header>

      {/* Map Section */}
      <main className="flex-grow bg-gray-300 flex items-center justify-center">
        <h1 className="text-3xl font-bold">MAP</h1>
      </main>

      {/* Transportation Options */}
      {showOptions && (
        <footer className="bg-white p-4 flex justify-around">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center">
              <span>🚖</span> {/* E-Cab */}
            </div>
            <p>E-Cab</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center">
              <span>🏍️</span> {/* E-Bike */}
            </div>
            <p>E-Bike</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center">
              <span>🚲</span> {/* E-Bicycle */}
            </div>
            <p>E-Bicycle</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center">
              <span>👥</span> {/* Carpool */}
            </div>
            <p>Carpool</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Home;