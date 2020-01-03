import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CurrentCity from "./components/CurrentCity";

const App = () => {
  return (
    <BrowserRouter>
      <h1 className="app-header">Weather App</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/city/:id" component={CurrentCity} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
