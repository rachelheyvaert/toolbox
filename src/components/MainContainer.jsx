import React, {useState, useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./static/Home";
import Form from "./Form";
import ActivitiesContainer from "./ActivitiesContainer";
import PlannedContainer from "./PlannedContainer";
const baseUrl = `http://localhost:3001/activities`

const MainContainer = () => {
  const [activities, setActivities] = useState([]);
  const [plans, setPlans] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterBy, setFilterBy] = useState("All")
  

  useEffect(()=> {
    fetch(baseUrl)
    .then((r)=>r.json())
    .then((data)=>{
      const plannedActivties = data.filter((activity)=> activity.isPlanned === true);
      setPlans(plannedActivties);
      setActivities(data);
    })
  },[])


  


  function handleAddNewActivity(newTask){
    const updatedActvities = [...activities, newTask];
    setActivities(updatedActvities);
    console.log(newTask)
  }



  function handleAddToPlanner(taskId){
    const task = plans.find((activity)=> taskId === activity.id);
      if(!task){
        fetch(`http://localhost:3001/activities/${taskId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              ...task,
            isPlanned: true  }),
        })
          .then((r)=> r.json())
          .then((taskToAdd)=> setPlans([...plans, taskToAdd]))
      }
  }

  function handleRemoveFromPlans(task){
    fetch(`http://localhost:3001/activities/${task.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...task,
              isPlanned: false }),
    })
    const updatedPlans = plans.filter((plannedTask)=> plannedTask !== task);
    setPlans(updatedPlans);
  }


  function handleDeleteClick(task) {
    fetch(`http://localhost:3001/activities/${task.id}`, {
       method: "DELETE",
    })
    const updatedActivities = activities.filter((activity)=> activity !== task);
    setActivities(updatedActivities);
  }



  const activitiesToDisplay = activities.filter((activity)=>{
    if(searchInput !== "") {    
     return activity.name.toLowerCase().includes(searchInput.toLowerCase()); 
    } else {
        return activities;
      }
  })

  const filteredActivities = activitiesToDisplay.filter((activity)=>{
    if(filterBy !== "All"){
      return activity.area === filterBy
    } else {
      return activitiesToDisplay
    }
  });



return (
  <div>
    <Routes>
      <Route path="/"
      element= {<Home />} 
      />
      <Route path="/activities"
      element={<ActivitiesContainer 
          activities={filteredActivities}
          handleDeleteClick={handleDeleteClick}
          onAddToPlans={handleAddToPlanner}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          filter={filterBy}
          setFilterBy={setFilterBy}
         />} 
      />
      <Route path="/activities/new" 
        element={<Form 
        onAddActivity={handleAddNewActivity} />} 
      />
      <Route path="/activities/planned" 
        element={<PlannedContainer 
        plans={plans} 
        handleRemoveFromPlans={handleRemoveFromPlans} />}
      />
    </Routes>
  </div>
);
}

export default MainContainer;