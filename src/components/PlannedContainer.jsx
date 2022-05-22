import React from 'react'
import ActivityCard from './ActivityCard'



const PlannedContainer = ({plans}) => {
  const plannedList = plans.map((task)=>{
   return <ActivityCard key={task.id} task={task} plans={plans} />
  })
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Your Planned Activities</h1>
     {plannedList}
    </div>
  )
}

export default PlannedContainer;