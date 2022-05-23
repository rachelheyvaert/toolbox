import React from 'react'
import ActivityCard from './ActivityCard'
import Grid from '@mui/material/Grid';


const PlannedContainer = ({plans, handleRemoveFromPlans}) => {
  const plannedList = plans.map((task)=>{
   return (
   <ActivityCard task={task} 
   handleRemoveFromPlans={handleRemoveFromPlans}/>
   ) })
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Your Planned Activities</h1>
      <Grid container spacing={1}>
      {plannedList}
      </Grid>
    </div>
  )
}

export default PlannedContainer;