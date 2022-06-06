import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PlannedCard = ({task, handleRemove})=> {
  
    return (
    <Card id={task.id} key={task.id} sx={{ maxWidth: 345, background:"#023047",margin:"50px", border:"solid" }}>
      <CardMedia component="img" height="140"
        image={task.image}
        alt={task.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="#ffb703" component="div">
          {task.name}
        </Typography>
        <Typography variant="body2" color="white">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handleRemove(task)}>Remove</Button>
      </CardActions>
    </Card>
  );
}
export default PlannedCard;