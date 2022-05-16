import React, {useState, useEffect} from 'react'
import ActivityCard from './ActivityCard'

const baseUrl = `http://localhost:3001/activities`

const ActivitiesList = () => {
  const [activityList, setActivityList] = useState([])

  useEffect(()=> {
    fetch(baseUrl)
    .then((r)=>r.json())
    .then((data)=>setActivityList(data))
    }, [])

  const activityObj = activityList.map((task)=> {
    console.log(activityList);
    return <ActivityCard key={task.id} task={task}/>})
    return (
    <div>
      <h1>All Activities</h1>
    {activityObj}
 
  </div>
  )}

export default ActivitiesList;