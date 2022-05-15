import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/static/Home";
import AddActivity from "./components/AddActivity"
import ActivitiesList from "./components/ActivitiesList";

const App = () => {
  return (
  
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/activities" element={<ActivitiesList/>} />
      <Route path="/activities/add" element={<AddActivity/>} />
    </Routes>
   
    </Router>
  
  
   
  );
}

export default App;
