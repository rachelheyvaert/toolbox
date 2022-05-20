import React, {useState, useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./static/Home";
import NewActivityForm from "./NewActivityForm"
import ActivitiesList from "./ActivitiesList";
import PlannedActivities from "./PlannedActivities";
const baseUrl = `http://localhost:3001/activities`

const PageContainer = () => {
const [activityList, setActivityList] = useState([])
const [plans, setPlan] = useState([]);
const [search, setSearch] = useState("")

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
function handleAddNewActivity(newTask){
    const updatedActvities = [...activityList, newTask];
    setActivityList(updatedActvities)
}

function handleAddToPlanner(taskToAdd){
    const taskInPlans = plans.find(
        (task)=> task.id === taskToAdd.id);
        if(!taskInPlans) {
            setPlan([...plans, taskToAdd])
            console.log(plans)
        }
    }

return (
<div>
<Routes>
  <Route path="/" element= {<Home />} />
  <Route path="/activitieslist"
   element={<ActivitiesList 
    setDisplay={setActivityList}
     displayedActivities={displayActivities} 
      setSearch={setSearch}
      search={search}/>} 
      onAddToPlans={handleAddToPlanner}/>
    <Route path="/activities/new" element={<NewActivityForm onAddActivity={handleAddNewActivity}/>} />
    <Route path="/activities/planned" element={<PlannedActivities activities={plans}/>} />
</Routes>
</div>




);
}

export default PageContainer