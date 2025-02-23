import React from "react";
import "../pages/Home.css"; // Ensure this path is correct if using CSS

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to my World!</h1>
      <p>This is the home page of my awesome application explore and enjoy!</p>
      <button onClick={() => alert("You are my world now! ayiee <3")}>
        Do you want to enter my world?
      </button>
    </div>
  );
};

export default Home;
