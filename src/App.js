import React from "react";
import "./styles/App.scss";
import { HashRouter as Router, Route } from "react-router-dom";
import Main from "./Components/Main";
import Cart from "./Components/Cart";
import ScrollToTop from "./ScrollToTop";
import { CSSTransition } from "react-transition-group";

function App() {
  
  // findDOMNode error shooting
  const nodeRef1 = React.useRef(null);
  const nodeRef2 = React.useRef(null);

  return (
    <Router>
      <ScrollToTop />
      <Route path="/" exact>
        {({ match }) => (
          <CSSTransition
            nodeRef={nodeRef1}
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div ref={nodeRef1}>
            <Main />
            </div>
          </CSSTransition>
        )}
      </Route>
      <Route path="/cart" exact>
        {({ match }) => (
          <CSSTransition
            nodeRef={nodeRef2}
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div ref={nodeRef2}>
            <Cart />
            </div>
          </CSSTransition>
        )}
      </Route>
    </Router>
  );
}

export default App;
