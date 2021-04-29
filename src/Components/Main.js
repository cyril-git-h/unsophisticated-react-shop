import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import darkgreen from "../images/darkgreen.png";
import brightgreen from "../images/brightgreen.png";
import black from "../images/black.png";
import aqua from "../images/aqua.png";
import { useEffect } from "react";
import { sliderFunction } from "../vanilla";

export default function Main() {
  useEffect(sliderFunction, []);

  return (
    <div className="App">
      <Header />
      <div className="page">
        <div className="banner">
          <div className="container">
            <div className="slider">
              <i className="fas fa-arrow-circle-right" id="rightbtn"></i>
              <i className="fas fa-arrow-circle-left" id="leftbtn"></i>
              <div className="slider__inner">
                <img src={darkgreen} alt="slide" id="lastClone" />
                <img src={aqua} alt="slide" />
                <img src={black} alt="slide" />
                <img src={brightgreen} alt="slide" />
                <img src={darkgreen} alt="slide" />
                <img src={aqua} alt="slide" id="firstClone" />
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className="container">
            <Section title="Shirts" />
            <Section title="Pants" />
            <Section title="Suites" />
            <Section title="Skirts" />
            <Section title="Hats" />
            <Section title="Socks" />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
