import React, { useState } from 'react';

import './App.css';



const Tst = () => {

  const [bookingDetails, setBookingDetails] = useState(null);

  const [name, setName] = useState('');

  const [pickupLocation, setPickupLocation] = useState('');

  const [dropLocation, setDropLocation] = useState('');

  const [transportMode, setTransportMode] = useState('cab');



  const handleBooking = (e) => {

    e.preventDefault();

    const details = {

      name,

      pickupLocation,

      dropLocation,

      transportMode,

    };

    setBookingDetails(details);

  };



  const vehicles = {

    cab: [

      { id: 1, model: 'Tesla Model 3', capacity: 4 },

      { id: 2, model: 'Nissan Leaf', capacity: 5 },

    ],

    cycle: [

      { id: 1, model: 'E-Cycle Model A', capacity: 1 },

      { id: 2, model: 'E-Cycle Model B', capacity: 1 },

    ],

    sharedTaxi: [

      { id: 1, model: 'Shared Taxi Model X', capacity: 4 },

      { id: 2, model: 'Shared Taxi Model Y', capacity: 4 },

    ],

  };



  return (

    <div className="app">

      <h1>EV Booking Service</h1>

      {bookingDetails ? (

        <div className="booking-confirmation">

          <h2>Booking Confirmation</h2>

          <p>Name: {bookingDetails.name}</p>

          <p>Pickup Location: {bookingDetails.pickupLocation}</p>

          <p>Drop Location: {bookingDetails.dropLocation}</p>

          <p>Transport Mode: {bookingDetails.transportMode}</p>

          <p>Thank you for booking with us!</p>

        </div>

      ) : (

        <>

          <form onSubmit={handleBooking} className="booking-form">

            <h2>Book a Vehicle</h2>

            <input

              type="text"

              placeholder="Your Name"

              value={name}

              onChange={(e) => setName(e.target.value)}

              required

            />

            <input

              type="text"

              placeholder="Pickup Location"

              value={pickupLocation}

              onChange={(e) => setPickupLocation(e.target.value)}

              required

            />

            <input

              type="text"

              placeholder="Drop Location"

              value={dropLocation}

              onChange={(e) => setDropLocation(e.target.value)}

              required

            />

            <div>

              <label>

                <input

                  type="radio"

                  value="cab"

                  checked={transportMode === 'cab'}

                  onChange={(e) => setTransportMode(e.target.value)}

                />

                EV Cab

              </label>

              <label>

                <input

                  type="radio"

                  value="cycle"

                  checked={transportMode === 'cycle'}

                  onChange={(e) => setTransportMode(e.target.value)}

                />

                EV Cycle

              </label>

              <label>

                <input

                  type="radio"

                  value="sharedTaxi"

                  checked={transportMode === 'sharedTaxi'}

                  onChange={(e) => setTransportMode(e.target.value)}

                />

                Shared Taxi

              </label>

            </div>

            <button type="submit">Book Now</button>

          </form>



          <div className="vehicle-list">

            <h2>Available Vehicles</h2>

            <h3>{transportMode === 'cab' ? 'EV Cabs' : transportMode === 'cycle' ? 'EV Cycles' : 'Shared Taxis'}</h3>

            <ul>

              {vehicles[transportMode].map((vehicle) => (

                <li key={vehicle.id}>

                  {vehicle.model} - Capacity: {vehicle.capacity}

                </li>

              ))}

            </ul>

          </div>

        </>

      )}

    </div>

  );

};



export default Tst;