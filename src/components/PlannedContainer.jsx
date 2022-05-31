import React from 'react'
import ActivityCard from './ActivityCard'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const PlannedContainer = ({plans, handleRemoveFromPlans}) => {
  const plannedList = plans.map((task)=>{
   return ( <div>
     <Grid>
     <Button style={{color:"023047"}} ml="10%" align="center" size="small" onClick={()=> handleRemoveFromPlans(task)}> Remove?
      </Button>
      <ActivityCard 
          task={task}
          key={task.id}
           />
     </Grid>
   
   </div>
   ) 
  })

  return (
    <div >
      <Typography sx={{ flexGrow: 5 }} mt="20px"variant="h3" align="center" style={{color:"#023047"}} >
           Planned Activities</Typography>
      <Grid container spacing={1} ml="40px">
      {plannedList}
      </Grid>
    </div>
  )
}

export default PlannedContainer;