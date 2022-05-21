import React from 'react'
import ActivityCard from './ActivityCard'



const PlannedContainer = ({activities}) => {
  const plannedList = activities.map((task)=>{
   return <ActivityCard key={task.id} task={task} />
  })
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Your Planned Activities</h1>
     {plannedList}
    </div>
  )
}

export default PlannedContainer;