import React from 'react'
import ActivityCard from './ActivityCard'



const ActivitiesList = ({activityList}) => {
 

  const activityObj = activityList.map((task)=> {
    console.log(activityList);
    return <ActivityCard key={task.id} task={task}/>})
    return (
      <div>
        <h1>All Activities</h1>
    <div style={{display: 'flex'}}>
    </div>
    {activityObj}
    
 
  </div>
  )}

export default ActivitiesList;