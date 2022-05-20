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

const ActivityCard = ({task, onDelete, onAddToPlans}) => {
  const [isPlanned, setIsPlanned] = useState(false);
  function handleClick(){
onAddToPlans(task)
setIsPlanned(false)
  }
  
  function handleDeleteClick() {
    fetch(`http://localhost:3001/activities/${task.id}`, {
      method: "DELETE",
    })
    onDelete(task)
  } ///deletes when refreshed only, want to update state? State is included in function...

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
        <Button onClick={handleDeleteClick} size="small"><DeleteIcon></DeleteIcon></Button>
        <div>
        {isPlanned ?  (<Button style={{color:"green"}} size="small"  onClick={handleClick}><CheckCircleIcon></CheckCircleIcon>Ready</Button>) 
       : (<Button style={{paddingLeft:"100px"}}size="small"  onClick={() => setIsPlanned(true)}><AddTaskIcon></AddTaskIcon> Add to Plan</Button>)}
        </div>       
      </CardActions>
    </Card>
  );
}
export default ActivityCard;