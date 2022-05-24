import React from 'react'
import { TextField } from '@mui/material'


const SearchBar = ({ setSearchInput, searchInput}) => {
  function handleSearchChange(e){
    setSearchInput(e.target.value);
  };

  return (
    <div>
    <form   style={{textAlign: "center"}}>
       <TextField style={{backgroundColor: "#8ecae6" }}
       color="warning"
    label="Search for an activity..."
    value={searchInput}
    onChange={handleSearchChange}/>
    </form>
    </div>
  )
};

export default SearchBar;