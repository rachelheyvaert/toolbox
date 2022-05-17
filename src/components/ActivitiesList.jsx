import React  from  'react'
import ActivityCard from './ActivityCard'
import SearchBar from './SearchBar';


const ActivitiesList = ({ displayedActivities, search, setSearch}) => {
  
  
 const activityObj = displayedActivities.map((task)=> {
      return <ActivityCard key={task.id} task={task} />
    })
    return (
      <div>
        <h1>All Activities</h1>
        <SearchBar onSearch={setSearch} search={search} />
        {activityObj}
     </div>
  )}

export default ActivitiesList;