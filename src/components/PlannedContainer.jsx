import React from 'react'
import ActivityCard from './ActivityCard'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const PlannedContainer = ({plans, handleRemoveFromPlans}) => {
  const plannedList = plans.map((task)=>{
   return ( <div>
 <ActivityCard 
    task={task}
    key={task.id}
    handleRemoveFromPlans={handleRemoveFromPlans}/>
   </div>
   ) 
  })

  return (
    <div>
      <Typography sx={{ flexGrow: 5 }} mt="20px"variant="h3" align="center" style={{color:"#023047"}} >
           Planned Activities</Typography>
      <Grid container spacing={1} ml="40px">
      {plannedList}
      </Grid>
    </div>
  )
}

export default PlannedContainer;