import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password); // Validate credentials
    navigate("/home"); // Redirect to home page on successful login
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/spices-background.jpg')", // Your image path
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", // Allows absolute positioning inside the container
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent background for the form
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <img
              src="https://img.icons8.com/ios-filled/20/000000/user.png"
              alt="User Icon"
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px 10px 12px 35px", // Added padding for icon
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Password Input */}
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <img
              src="https://img.icons8.com/ios-filled/20/000000/lock.png"
              alt="Lock Icon"
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px 10px 12px 35px", // Added padding for icon
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />
            
          </div>

          {/* Login Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Login
          </button>
        </form>

        {/* Forgot Password link */}
        <div style={{ marginTop: "15px" }}>
          <p style={{ fontSize: "14px", color: "#007bff" }}>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;