import React  from  'react'
import ActivityCard from './ActivityCard'
import SearchBar from './SearchBar';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';



const ActivitiesContainer = ({searchInput, setSearchInput, handleDeleteClick, onAddToPlans, activities}) => {
  
  
  const activityObj = activities.map((task)=> {
    return <ActivityCard handleDeleteClick={handleDeleteClick} key={task.id} task={task}  onAddToPlansClick={onAddToPlans} />
  });
 
    return (
      <div>
        <Typography sx={{ flexGrow: 5 }} mt="20px"variant="h3" align="center" style={{color:"#023047"}} >
           Activities in Your Tool Box</Typography>
        <SearchBar searchInput={searchInput}  setSearchInput={setSearchInput}/>
        <Grid container spacing={2}>
        {activityObj}
        </Grid>
     </div>
  )}

export default ActivitiesContainer;