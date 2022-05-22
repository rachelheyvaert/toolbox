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
  .then((data)=>{
     const plannedActivties = data.filter((activity)=> activity.isPlanned === true)
     setPlans(plannedActivties)
      setActivities(data)
  })
},[])

const displayActivities = activities.filter((activity)=>{ 
if(search !== ""){
   return activity.name.toLowerCase().includes(search.toLowerCase())
} return (activities)
});


function handleAddNewActivity(newTask){
    const updatedActvities = [...activities, newTask];
    setActivities(updatedActvities)
}

function handleAddToPlanner(taskId){
   const taskInPlans = checkIfInPlanner(taskId)
    if(!taskInPlans){
    const taskToAdd = activities.find((activity)=> taskId === activity.id)
    fetch(`http://localhost:3001/activities/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...taskToAdd,
          isPlanned: true  }),
        })   
    }}

    function handleDeleteClick(task) {
        console.log(task)
        fetch(`http://localhost:3001/activities/${task.id}`, {
          method: "DELETE",
        })
        const updatedActivities = activities.filter((activity)=> activity !== task)
        setActivities(updatedActivities)
      }

    function checkIfInPlanner(taskIdToAdd){
        return plans.includes((task)=>  task.id === taskIdToAdd)
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
      search={search}
      handleDeleteClick={handleDeleteClick}
      onAddToPlans={handleAddToPlanner}
     setPlans={setPlans}
     plans={plans}/>} 
      />
    <Route path="/activities/new" element={<NewActivityForm onAddActivity={handleAddNewActivity} />} />
    <Route path="/activities/planned" element={<PlannedContainer plans={plans} />} />
</Routes>
</div>




);
}

export default PageContainer