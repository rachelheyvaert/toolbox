import * as React from 'react';
import {useState} from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const ActivityCard = ({task, onAddToPlansClick, setPlans, plans, handleDeleteClick}) => {
  const [isPlanned, setIsPlanned] = useState(false);
  
  function handleClick(){
// setIsPlanned(true);
onAddToPlansClick(task.id);
  }
  function handleRemoveFromPlans(){
    fetch(`http://localhost:3001/activities/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...task,
          isPlanned: false }),
        })
      const updatedPlans = plans.filter((plannedTask)=> plannedTask !== task)
setPlans(updatedPlans)
  }
   ///deletes when refreshed only, want to update state? State is included in function...

  return (
    <Card id={task.id} sx={{ maxWidth: 345, margin : '50px'}}>
      <CardMedia
        component="img"
        height="140"
        image={task.image}
        alt={task.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {task.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions >
        <Button onClick={() => handleDeleteClick(task)} size="small"><DeleteIcon></DeleteIcon></Button>
        <div>
     <Button style={{color:"inherit"}} size="small"  onClick={()=> handleClick()}><CheckCircleIcon></CheckCircleIcon>Save to Plan</Button>
     <Button style={{color:"inherit"}} size="small"  onClick={()=> handleRemoveFromPlans()}>Unsave</Button>
        </div>       
      </CardActions>
    </Card>
  );
}
export default ActivityCard;