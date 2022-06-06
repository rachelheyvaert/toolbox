import React from 'react'
import PlannedCard from './PlannedCard'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const PlannedContainer = ({plans, handleRemoveFromPlans}) => {
  const plannedList = plans.map((task)=>{
   return ( 
    
   <PlannedCard
          key={task.id}
          task={task}
          handleRemove={handleRemoveFromPlans}
           />
    
   ) 
  })

  return (
    <div >
      <Typography sx={{ flexGrow: 5 }} mt="20px"variant="h3" align="center" style={{color:"#023047"}} >
           Planned Activities</Typography>
      <Grid container spacing={2} ml="40px">
      {plannedList}
      </Grid>
    </div>
  )
}

export default PlannedContainer;