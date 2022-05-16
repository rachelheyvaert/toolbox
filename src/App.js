import React from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/static/Home";
import AddActivity from "./components/AddActivity"
import ActivitiesList from "./components/ActivitiesList";
import PlannedActivities from "./components/PlannedActivities";


const App = () => {
  
return (
  <div>
  <NavBar />
  <Routes>
    <Route path="/" element= {<Home/>} />
    <Route path="/activitieslist" element={<ActivitiesList />}/>
    <Route path="/activities/add" element={<AddActivity />} />
    <Route path="/activities/planned" element={<PlannedActivities />} />
  </Routes>
 
  </div>



 
);
}
export default App;
