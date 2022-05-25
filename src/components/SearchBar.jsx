import React from 'react';
import TextField from '@mui/material/TextField';


const SearchBar = ({ setSearchInput, searchInput, filterBy, setFilterBy}) => {

  function handleSearchChange(e){
    setSearchInput(e.target.value);
  };
   function handleFilterChange(e){
     setFilterBy(e.target.value)
   }

  return (
    <div style={{textAlign: "center"}}>
    <form >
       <TextField style={{backgroundColor: "#8ecae6" }}
       color="warning"
    label="Search for an activity..."
    value={searchInput}
    onChange={handleSearchChange}/>
    </form>
   <label>
    <select onChange={handleFilterChange} value={filterBy}>
      <option value="All">Filter by...</option>
      <option value="Language">Language</option>
      <option value="Articulation">Articulation</option>
      <option value="Pragmatics">Pragmatics</option>
      <option value="Fluency">Fluency</option>
      <option value="Voice">Voice</option>
      <option value="Auditory Processing">Auditory Processing</option>
    </select>
   </label>
    </div>
  )
};

export default SearchBar;