import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import Convertor from "./components/convertor/Convertor";
import Graph from "./components/graph/Graph";
import Navigation from "./components/navigation/Navigation";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
// import 'font-awesome/css/font-awesome.css'

function App() {
  return (
    <div className="fluid-container">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route  path="/convertor" exact>
          <Convertor />
        </Route>
        <Route path="/graph" exact>
          <Graph />
          {/* <Route path=":id" element={<Graph />} /> */}
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
