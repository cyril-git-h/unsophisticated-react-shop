import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";

export default function Main() {
  return (
    <div className="App">
      <Header />
      <div className="page">
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
