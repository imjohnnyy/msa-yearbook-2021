import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (

    <div className="App">
      <Header></Header>
      <Button color="primary">HELLO WORLD</Button>
      <Footer></Footer>
    </div>

  );
}

export default App;
