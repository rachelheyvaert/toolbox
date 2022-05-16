import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { color } from '@mui/system';

const ActivityCard = ({task}) => {

// function handleClick(e){
//     console.log("target", e.target.value.parentElement)
//     handleAddToPlanner(e.target.value)
// }

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
      <CardActions>
        <Button size="small">Delete</Button>
        <Button  size="small">Add to Planner</Button>
      </CardActions>
    </Card>
  );
}
export default ActivityCard;