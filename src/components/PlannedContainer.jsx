import React from 'react'
import PlannedCard from './PlannedCard'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const PlannedContainer = ({plans, handleRemoveFromPlans}) => {
  const plannedList = plans.map((task)=>{
   return ( 
     <div>
   <PlannedCard
          task={task}
          key={task.id}
          handleRemove={handleRemoveFromPlans}
           />
           </div>
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