import React, {useState}  from  'react'
import ActivityCard from './ActivityCard'
import SearchBar from './SearchBar';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';



const ActivitiesContainer = ({ handleDeleteClick, onAddToPlans, activities}) => {
  const [searchInput, setSearchInput] = useState("");
  const [filterBy, setFilterBy] = useState("All")

  const activitiesToDisplay = activities.filter((activity)=>{
    if(searchInput !== "") {    
     return activity.name.toLowerCase().includes(searchInput.toLowerCase()); 
    } else {
        return activities;
      }
  })

  const filteredActivities = activitiesToDisplay.filter((activity)=>{
    if(filterBy !== "All"){
      return activity.area === filterBy
    } else {
      return activitiesToDisplay
    }
  });

  const activityObj = activities.map((task)=> {
    return <ActivityCard handleDeleteClick={handleDeleteClick} key={task.id} task={task}  onAddToPlansClick={onAddToPlans} />
  });
 
    return (
      <div>
        <Typography sx={{ flexGrow: 5 }} font="Monaco" mt="20px"variant="h3" align="center" style={{color:"#023047"}} >
           Activities in Your Tool Box</Typography>
        <SearchBar searchInput={searchInput}  setSearchInput={setSearchInput} filterBy={filterBy} setFilterBy={setFilterBy}/>   
       <Grid container spacing={2} ml="40px">
        {activityObj}
        </Grid>
     </div>
  )}

export default ActivitiesContainer;