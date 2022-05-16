import React from 'react'
import ActivityCard from './ActivityCard'
import Grid from '@mui/material/Grid';
import { Search } from '@mui/icons-material';
import SearchList from './SearchList';



const ActivitiesList = ({ setPlannedTasks, plannedTasks, display, setSearch}) => {
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
    

    const activityObj = display.map((task)=> {
      return <ActivityCard key={task.id} task={task} />
    })
    return (
      <div>
        <h1>All Activities</h1>
        <SearchList onSearch={setSearch} />
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    {activityObj}
    </Grid>
  </Grid>
    

  </div>
  )}

export default ActivitiesList;