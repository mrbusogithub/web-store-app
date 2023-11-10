import React from "react";
import HomePage from "./images/HomePage.jpg";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from React Router

function Home() {
  return (
    <div className="page-content">
      <h1 className="ms-3" style={{ color: "lightgrey" }}>
        Home
      </h1>
      <div className="my-4" style={{ textAlign: "center" }}>
        <div>
          <label style={{ color: "white" }}>
            {/* Prompt to navigate to the registration page to create a new account */}
            Click here to register an account
          </label>
        </div>
        <Link to="/registration">
          {" "}
          {/* Provide the path to your Registration component */}
          <Button variant="secondary">Register</Button>
        </Link>
      </div>
      <div className="home-page mt-5">
        <img src={HomePage} alt="Home page" />
        <div className="layer">
          <h3>
            Welcome to Sports Fever - Your Ultimate Destination for Sports
            Enthusiasts!
          </h3>
          <p>
            Discover a world of sports gear and apparel that fuels your passion.
            Whether you're a seasoned athlete or a dedicated fan, our store
            offers a wide range of top-quality products to elevate your game.
            Explore our collection, gear up, and show your love for the sports
            you're passionate about. Let the journey begin!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
