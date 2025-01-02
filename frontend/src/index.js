import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Importing Bootstrap CSS for consistent styling
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-icons";

// Root element from the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
