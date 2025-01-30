import React, { useState } from "react";
import registerImage from "../assets/images/Reg.jpg"; // Import the image
import axios from "axios";

const RegisterPage = ({ onNext }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState(""); // For displaying error messages

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/register", user)
      .then((response) => {
        alert("Registration Successful");
        onNext(); // Proceed to the next step on success
      })
      .catch((error) => {
        const errorMsg = error.response?.data?.message || "Registration failed. Please try again.";
        setError(errorMsg);
      });
  };

  const pageStyle = {
    backgroundImage: `url(${registerImage})`, // Set the image as background
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={pageStyle}>
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create an Account</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
