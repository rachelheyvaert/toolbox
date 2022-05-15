import React, {useEffect, useState} from 'react'
import ActivityCard from './ActivityCard'

const ActivitiesList = () => {

  const [activities, setActivities] = useState([])

  useEffect(()=>{
fetch(`http://localhost:3001`)
.then((r)=>r.json())
.then((data)=> setActivities(data))
  }, [])
  return (
    <div>ActivitiesList
    {activities.map((task)=> {
<ActivityCard key={task.id} task={task}/>
    })}
  </div>
  )
}

export default ActivitiesList