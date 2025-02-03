import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!username || !password) {
      setErrorMessage("Please enter both username and password.");
      return;
    }

    try {
      // Validate credentials via onLogin function
      const isValid = await onLogin(username, password);

      if (isValid) {
        navigate("/home"); // Redirect to home page on successful login
      } else {
        setErrorMessage("Invalid username or password.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/spices-background.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        {/* Display error message if any */}
        {errorMessage && (
          <div
            style={{
              color: "red",
              fontSize: "14px",
              marginBottom: "15px",
              padding: "10px",
              backgroundColor: "#f8d7da",
              borderRadius: "5px",
              border: "1px solid #f5c6cb",
            }}
          >
            {errorMessage}
          </div>
        )}

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
                padding: "12px 10px 12px 35px",
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
                padding: "12px 10px 12px 35px",
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
          <p style={{ fontSize: "14px", color: "#007bff" }}>
            <a href="/forgot-password" style={{ textDecoration: "none" }}>
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
