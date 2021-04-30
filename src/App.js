import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Components/Main";
import Cart from "./Components/Cart";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Route path={process.env.PUBLIC_URL + "/"} exact component={Main} />
      <Route path={process.env.PUBLIC_URL + "/cart"} exact component={Cart} />
    </Router>
  );
}

export default App;
