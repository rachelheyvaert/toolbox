import React from 'react'
import { TextField } from '@mui/material'
import { display } from '@mui/system'
import Button from '@mui/material/Button';

const SearchBar = ({onSearch, search}) => {
;

  function handleSubmit(e) {
    e.preventDefault();
  onSearch(search)
 }

  return (
    <form  onSubmit={handleSubmit} style={{ padding: "20px"}}>
       <TextField
    id="filled-hidden-label-small"
    label="Search for an activity..."
    value={search}
    onChange={(e)=> onSearch(e.target.value)}
  />
    </form>
   
  )
}

export default SearchBar