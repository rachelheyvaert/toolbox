import React  from  'react'
import ActivityCard from './ActivityCard'
import SearchBar from './SearchBar';
import Grid from '@mui/material/Grid';



const ActivitiesContainer = ({ displayedActivities, setDisplay, search, setSearch, onAddToPlans}) => {
  
  function handleDeleteActivity(id) {
    const updatedActvities = displayedActivities.filter((activity) => activity.id !== id);
    setDisplay(updatedActvities);
  }
  const activityObj = displayedActivities.map((task)=> {
    console.log(displayedActivities)
    return <ActivityCard key={task.id} task={task} onDelete={handleDeleteActivity} onAddToPlansClick={onAddToPlans} />
  })
 
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Activities in your Tool Box</h1>
        <SearchBar  onSearch={setSearch} search={search} />
        <Grid container spacing={2}>
        {activityObj}
        </Grid>
     </div>
  )}

export default ActivitiesContainer;