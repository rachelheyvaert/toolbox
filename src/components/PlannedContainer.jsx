import React from 'react'
import ActivityCard from './ActivityCard'



const PlannedContainer = ({activities}) => {
  const plannedList = activities.map((task)=>{
   return <ActivityCard key={task.id} task={task} />
  })
  return (
    <div>Planned Activities
     {plannedList}
    </div>
  )
}

export default PlannedContainer;