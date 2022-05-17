import React  from  'react'
import ActivityCard from './ActivityCard'
import SearchBar from './SearchBar';


const ActivitiesList = ({ displayedActivities, setDisplay, search, setSearch}) => {
  
  function handleRemoveActivity(id) {
    const updatedActvities = displayedActivities.filter((activity) => activity.id !== id);
    setDisplay(updatedActvities);
  }
  
 const activityObj = displayedActivities.map((task)=> {
      return <ActivityCard key={task.id} task={task} onDelete={handleRemoveActivity} />
    })
    return (
      <div>
        <h1>All Activities</h1>
        <SearchBar onSearch={setSearch} search={search} />
        {activityObj}
     </div>
  )}

export default ActivitiesList;