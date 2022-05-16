import React from 'react'
import ActivityCard from './ActivityCard'
import Grid from '@mui/material/Grid';
import { Search } from '@mui/icons-material';




const ActivitiesList = ({activityList, setPlannedTasks, plannedTasks}) => {
  const baseUrl = `http://localhost:3001/activities/`
  

    // function handleAddToPlanner(activityToAdd){
    //   fetch(`baseURL${id})`,{
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     }, body: JSON.stringify({
    //       "isPlanned": !plannedTasks.isPlanned,
    //     })
    //   }
    //   .then((r)=> r.json())
    //   .then(setPlannedTasks))

      // const taskInPlanner = plannedTasks.find(
      //   (task) => task.id === activityToAdd.id
      // );
      // if(!taskInPlanner) {
      //   setPlannedTasks([...plannedTasks, taskInPlanner])
      // }
    

    const activityObj = activityList.map((task)=> {
      return <ActivityCard key={task.id} task={task} />
    })
    return (
      <div>
        <h1>All Activities</h1>
        <Search />
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    {activityObj}
    </Grid>
  </Grid>
    

  </div>
  )}

export default ActivitiesList;