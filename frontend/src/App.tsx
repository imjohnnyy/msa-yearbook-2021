import React from "react";
import { Route, Switch } from 'react-router';
import "./App.css";

import  Header  from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { HomePage } from "./Pages/HomePage/HomePage";
import { SubmitPage } from "./Pages/SubmitPage/SubmitPage";

function App() {
  return (

    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/submit" component={SubmitPage} />
      </Switch>
      <Footer />
    </div>

  );
}

export default App;
