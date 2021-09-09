import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home, Login, Register, Statistics } from "./pages";
import { Header, Footer } from "./layout";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/register"><Register /></Route>
        <Route path="/stats"><Statistics /></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
