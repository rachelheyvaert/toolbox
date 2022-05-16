import React, {useState, useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/static/Home";
import AddActivity from "./components/AddActivity"
import ActivitiesList from "./components/ActivitiesList";
import PlannedActivities from "./components/PlannedActivities";

const baseUrl = `http://localhost:3001/activities`

const App = () => {
  const [activityList, setActivityList] = useState([])

  useEffect(()=> {
    fetch(baseUrl)
    .then((r)=>r.json())
    .then((data)=>setActivityList(data))
    }, [])
return (
  <div>
  <NavBar />
  <Routes>
    <Route path="/" element= {<Home/>} />
    <Route path="/activitieslist" element={<ActivitiesList  activityList={activityList} />}/>
    <Route path="/activities/add" element={<AddActivity />} />
    <Route path="/activities/planned" element={<PlannedActivities />} />
  </Routes>
 
  </div>



 
);
}
export default App;
