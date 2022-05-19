import React, {useState, useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/static/Home";
import NewActivityForm from "./components/NewActivityForm"
import ActivitiesList from "./components/ActivitiesList";
import PlannedActivities from "./components/PlannedActivities";
const baseUrl = `http://localhost:3001/activities`

const PageContainer = () => {
const [activityList, setActivityList] = useState([])
const [isPlanned, setIsPlanned] = useState(false);
const [search, setSearch] = useState("");

useEffect(()=> {
  fetch(baseUrl)
  .then((r)=>r.json())
  .then((data)=>setActivityList(data))
  }, [])

const displayActivities = activityList.filter((activity)=>{ 
if(search !== ""){
   return activity.name.toLowerCase().includes(search.toLowerCase())
} return (activityList)
});
function handleAddActivity(newTask){
const updatedActvities = [...ActivitiesList, newTask];
setActivityList(updatedActvities)
}

return (
<div>
<NavBar />
<Routes>
  <Route path="/" element= {<Home/>} />
  <Route path="/activitieslist"
   element={<ActivitiesList 
    setDisplay={setActivityList}
     displayedActivities={displayActivities} 
      setSearch={setSearch}
      search={search}
      setIsPlanned={setIsPlanned}
      isPlanned={isPlanned}/> }
      />
  <Route path="/activities/new" element={<NewActivityForm onAddActivity={handleAddActivity}/>} />
  <Route path="/activities/planned" element={<PlannedActivities isPlanned={isPlanned} 
      setIsPlanned={setIsPlanned}/>} />
</Routes>

</div>




);
}

export default PageContainer