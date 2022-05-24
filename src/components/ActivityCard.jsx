import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTaskIcon from '@mui/icons-material/AddTask';


const ActivityCard = ({task, handleRemoveFromPlans,onAddToPlansClick, handleDeleteClick}) => {
  const [click, setClick] = useState(false);

  function handleClick(){
    onAddToPlansClick(task.id);
    setClick(true);
  }

  return (
    <Card id={task.id} sx={{ maxWidth: 345, margin : '50px', color: "#99746B", border:"solid", borderColor:"#023047"}}>
      <CardMedia
        component="img"
        height="140"
        image={task.image}
        alt={task.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" style={{color: "#fb8500"}}>
         {task.name}
        </Typography>
        <Typography variant="body1" style={{color: "#ffb703"}}>
        Target area: {task.area}
        </Typography>
        <Typography variant="body2" style={{color: "#219ebc"}}>
          {task.description}
        </Typography>
      </CardContent>
      <CardActions >
        <Button onClick={() => handleDeleteClick(task)} size="small" style={{color:"#ff5003"}}>
          <DeleteIcon></DeleteIcon>
        </Button>
        <Button disabled={click} style={{color:"#ffb703"}} size="small" onClick={()=> handleClick()}>
          {click ? <CheckCircleIcon style={{color: "#8ecae6"}}></CheckCircleIcon> 
          : <AddTaskIcon></AddTaskIcon>}
        </Button>
        <Button disabled={click} style={{color:"023047"}} size="small" onClick={()=> handleRemoveFromPlans(task)}> {click ? "Added to plans!" : "remove" }
        </Button>
      </CardActions>
    </Card>
  );
}
export default ActivityCard;