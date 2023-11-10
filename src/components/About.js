import React from "react";
import { Figure } from "react-bootstrap";
import "./About.css";
import StoreLogo from "./images/StoreLogo.png";
import StoreImage from "./images/StoreImage.jpg";

function About() {
  return (
    <div className="page-content">
      <h1 className="ms-3" style={{ color: "lightgrey" }}>
        About
      </h1>

      {/* Logo and Description */}
      <div className="logo-figure text-center">
        <Figure>
          <Figure.Image
            width={200}
            height={200}
            alt="Sports Fever Logo"
            src={StoreLogo}
            style={{ marginBottom: "-45px" }} // To decrease the gap between logo and caption
          />
          {/* Store Description */}
          <Figure.Caption className="mb-3" style={{ fontSize: "30px" }}>
            "Elevate Your Game with Sports Fever ~ Unleash Your Potential, One
            Quality Product at a Time."
          </Figure.Caption>
        </Figure>
      </div>

      {/* Store Images */}
      <div className="store-images text-center">
        <Figure>
          {/* Store Image */}
          <Figure.Image
            width={700}
            height={500}
            alt="Store Image"
            src={StoreImage}
            style={{ borderRadius: "5px" }}
            className="image-hover"
          />
        </Figure>
      </div>
      {/* Contact Details */}
      <div className="text-center" style={{ color: "lightgrey" }}>
        {/* Contact Information Heading */}
        <h2>Contact Information</h2>
        <p>Address: 123 Flint Street, Cape Town, Greenland</p>
        <p>Phone: (083) 456-7890</p>
        <p>Email: info@sportfever.com</p>
      </div>
    </div>
  );
}

export default About;
