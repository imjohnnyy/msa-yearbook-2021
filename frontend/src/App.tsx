import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import  Header  from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { HomePage } from "./Pages/HomePage/HomePage";
import { SubmitPage } from "./Pages/SubmitPage/SubmitPage";
import  SubmitForm  from "./stories/SubmitForm/SubmitForm";

function App() {
  return (

    <div className="App">
      <Header />
      <BrowserRouter>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/submit" component={SubmitPage} />
        <SubmitForm/>
      </Switch>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
