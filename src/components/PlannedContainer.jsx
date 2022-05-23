import React from 'react'
import ActivityCard from './ActivityCard'



const PlannedContainer = ({plans, handleRemoveFromPlans}) => {
  const plannedList = plans.map((task)=>{
   return (
   <ActivityCard task={task} 
   handleRemoveFromPlans={handleRemoveFromPlans}/>
   ) })
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Your Planned Activities</h1>
     {plannedList}
    </div>
  )
}

export default PlannedContainer;