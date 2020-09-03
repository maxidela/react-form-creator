import React from "react";
import Header from "../shared/Header";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "../pages/home/Home";
import FormsList from "../pages/forms/FormsList";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/forms" component={FormsList} />
      </Switch>
    </div>
  );
}

export default App;
