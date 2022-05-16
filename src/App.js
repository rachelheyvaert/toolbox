import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/static/Home";
import AddActivity from "./components/AddActivity"
import ActivitiesList from "./components/ActivitiesList";
import PlannedActivities from "./components/PlannedActivities";

const App = () => {
  const [activityList, setActivityList] = useState([])


  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/activities" element={<ActivitiesList/>} />
      <Route path="/activities/add" element={<AddActivity/>} />
      <Route path="/activities/planned" element={<PlannedActivities/>} />
    </Routes>
   
    </Router>
  
  
  
   
  );
}

export default App;
