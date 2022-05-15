import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/static/Home";

const App = () => {
  return (
    <BrowserRouter>
     <div className="App">
      <NavBar />
     <Home />
    </div>
    </BrowserRouter>
   
  );
}

export default App;
