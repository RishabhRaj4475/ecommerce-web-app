import React from "react";
import "./App.css";
import Header from "./header";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./checkout";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
      <Header />
        <Switch>
          <Route path = "/checkout">
            <Checkout />
          </Route>

          <Route path = "/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
