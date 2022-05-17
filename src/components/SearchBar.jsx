import React from 'react'
import { TextField } from '@mui/material'
import { display } from '@mui/system'
import Button from '@mui/material/Button';

const SearchBar = ({setSearch, search}) => {

  function handleChange(e) {
console.log(e.target.value) 

 }
  return (
    <div style={{ padding: "20px"}}>
       <TextField
    id="filled-hidden-label-small"
    label="Search for an activity..."
    value={search}
    onChange={handleChange}
  />
 <Button size="large" variant="contained">Search</Button>
    </div>
   
  )
}

export default SearchBar