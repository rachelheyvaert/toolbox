import React from 'react'
import { TextField } from '@mui/material'


const SearchBar = ({ setSearchInput, searchInput}) => {
  function handleSearchChange(e){
    console.log(e.target)
    console.log(e.target.value)
    setSearchInput(e.target.value);
 
  }
  return (
    <form   style={{textAlign: "center"}}>
       <TextField
    id="filled-hidden-label-small"
    label="Search for an activity..."
    value={searchInput}
    onChange={handleSearchChange}/>
    </form>
  )
}

export default SearchBar