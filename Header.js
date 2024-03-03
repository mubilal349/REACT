import React from "react";
import "./style.css";

const Header = () => {
  const buttonStyle = {
    backgroundColor: "#3498db", // Example background color
    color: "#ffffff", // Example text color
    padding: "10px", // Example padding
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/contact">Services</a>
          </li>
          <li>
            <a href="/contact">Projects</a>
          </li>
        </ul>
        <button style={buttonStyle}>
          Click me
        </button>
      </nav>
      <div>
        <h1>Welcome to Our Website</h1>
        <p className="ppp
        
        ">Discover our amazing services and projects.</p>
      </div>
    </header>
  );
};

export default Header;
