import React, {useState, useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./static/Home";
import NewActivityForm from "./NewActivityForm"
import ActivitiesContainer from "./ActivitiesContainer";
import PlannedContainer from "./PlannedContainer";

const baseUrl = `http://localhost:3001/activities`

const PageContainer = () => {
const [activities, setActivities] = useState([])
const [plans, setPlans] = useState([]);
const [search, setSearch] = useState("")

useEffect(()=> {
  fetch(baseUrl)
  .then((r)=>r.json())
  .then((data)=>setActivities(data))
  }, [])

const displayActivities = activities.filter((activity)=>{ 
if(search !== ""){
   return activity.name.toLowerCase().includes(search.toLowerCase())
} return (activities)
});


function handleAddNewActivity(newTask){
    const updatedActvities = [...activities, newTask];
    setActivities(updatedActvities)
}

function handleAddToPlanner(taskToAdd){
    const taskInPlans = plans.find(
        (task)=> task.id === taskToAdd.id);
        if(!taskInPlans) {
            setPlans([...plans, taskToAdd])
        }
    }

return (
<div>
<Routes>
  <Route path="/" element= {<Home />} />
  <Route path="/activities"
   element={<ActivitiesContainer 
    setDisplay={setActivities}
     displayedActivities={displayActivities} 
      setSearch={setSearch}
      search={search}/>} 
      />
    <Route path="/activities/new" element={<NewActivityForm onAddActivity={handleAddNewActivity} onAddToPlans={handleAddToPlanner}/>} />
    <Route path="/activities/planned" element={<PlannedContainer activities={plans} />} />
</Routes>
</div>




);
}

export default PageContainer