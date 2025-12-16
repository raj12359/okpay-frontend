// config.js

const API_BASE_URL =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://localhost:5000"   
    : "https://okpay-backend.onrender.com"; 

export { API_BASE_URL };

