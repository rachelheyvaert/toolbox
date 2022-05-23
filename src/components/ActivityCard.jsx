import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTaskIcon from '@mui/icons-material/AddTask';


const ActivityCard = ({task, handleRemoveFromPlans,onAddToPlansClick, handleDeleteClick}) => {
  const [click, setClick] = useState(false);

  function handleClick(){
    onAddToPlansClick(task.id);
    setClick(true)
  }

  return (
    <Card id={task.id} sx={{ maxWidth: 345, margin : '50px', color: "#99746B"}}>
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
     <Button disabled={click} style={{color:"inherit"}} size="small"  onClick={()=> handleClick()}><AddTaskIcon></AddTaskIcon></Button>
     <Button style={{color:"inherit"}} size="small"  onClick={()=> handleRemoveFromPlans(task)}>Unsave</Button>
        </div>       
      </CardActions>
    </Card>
  );
}
export default ActivityCard;