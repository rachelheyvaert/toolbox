import React  from  'react'
import ActivityCard from './ActivityCard'
import SearchBar from './SearchBar';
import Grid from '@mui/material/Grid';



const ActivitiesContainer = ({handleSearch, search, setSearch, handleDeleteClick, onAddToPlans, activities}) => {
  
  
  const activityObj = activities.map((task)=> {
    return <ActivityCard handleDeleteClick={handleDeleteClick} key={task.id} task={task}  onAddToPlansClick={onAddToPlans} />
  })
 
    return (
      <div>
       <h1 style={{textAlign: "center"}}>Activities in Your Tool Box</h1>
        <SearchBar  onSearch={setSearch} search={search} handleSearch={handleSearch} />
        <Grid container spacing={2}>
        {activityObj}
        </Grid>
     </div>
  )}

export default ActivitiesContainer;