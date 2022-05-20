import React  from  'react'
import ActivityCard from './ActivityCard'
import SearchBar from './SearchBar';
import Grid from '@mui/material/Grid';



const ActivitiesList = ({ displayedActivities, setDisplay, search, setSearch, onAddToPlans}) => {
  
  function handleRemoveActivity(id) {
    const updatedActvities = displayedActivities.filter((activity) => activity.id !== id);
    setDisplay(updatedActvities);
  }
  const activityObj = displayedActivities.map((task)=> {
    return <ActivityCard key={task.id} task={task} onDelete={handleRemoveActivity} onAddToPlans={onAddToPlans} />
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

export default ActivitiesList;