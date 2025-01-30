import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import RideDetailsPage from './pages/RideDetailsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage'; // Import the new LandingPage component
import './styles/App.css';

function App() {
  console.log("inside app");

  const [currentPage, setCurrentPage] = useState("landing"); // Start from landing page
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);

  const [rides, setRides] = useState([
    { id: 1, origin: 'Coimbatore', destination: 'Tirupur', date: '2025-02-01', availableSeats: 3 },
    { id: 2, origin: 'Pollachi', destination: 'Aliyar', date: '2025-02-05', availableSeats: 2 },
    { id: 3, origin: 'Chennai', destination: 'Coimbatore', date: '2025-02-10', availableSeats: 1 },
  ]);

  // Function to add a ride
  const addRide = (ride) => {
    setRides([...rides, { ...ride, id: rides.length + 1 }]);
  };

  return (
    <div className="App">
      {/* Landing Page */}
      {currentPage === "landing" && <LandingPage onStart={() => setCurrentPage("register")} />}

      {/* Register Page */}
      {currentPage === "register" && <RegisterPage onNext={() => setCurrentPage("login")} />}

      {/* Login Page */}
      {currentPage === "login" && (
        <LoginPage onSuccess={() => { setIsAuthenticated(true); setCurrentPage("home"); }} />
      )}

      {/* Home Page - Only visible after authentication */}
      {currentPage === "home" && isAuthenticated && (
        <HomePage
          rides={rides}
          addRide={addRide}
          onSelectRide={(ride) => { setSelectedRide(ride); setCurrentPage("rideDetails"); }}
        />
      )}

      {/* Ride Details Page */}
      {currentPage === "rideDetails" && selectedRide && (
        <RideDetailsPage
          ride={selectedRide}
          onBack={() => setCurrentPage("home")}
        />
      )}
    </div>
  );
}

export default App;
