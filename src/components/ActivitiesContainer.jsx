import React  from  'react'
import ActivityCard from './ActivityCard'
import SearchBar from './SearchBar';
import Grid from '@mui/material/Grid';



const ActivitiesContainer = ({ displayedActivities, setDisplay, search, plans, setSearch, handleDeleteClick, onAddToPlans, setPlans}) => {
  
  function handleDeleteActivity(id) {
    const updatedActvities = displayedActivities.filter((activity) => activity.id !== id);
    setDisplay(updatedActvities);
  }
  const activityObj = displayedActivities.map((task)=> {
    return <ActivityCard handleDeleteClick={handleDeleteClick} setPlans={setPlans} key={task.id} task={task} plans={plans} onAddToPlansClick={onAddToPlans} />
  })
 
    return (
      <div>
       <h1 style={{textAlign: "center"}}>Activities in Your Tool Box</h1>
        <SearchBar  onSearch={setSearch} search={search} />
        <Grid container spacing={2}>
        {activityObj}
        </Grid>
     </div>
  )}

export default ActivitiesContainer;