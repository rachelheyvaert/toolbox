import React from 'react'

import { TextField } from '@mui/material'


const SearchBar = ({onSearch, search}) => {


  return (
    <form   style={{textAlign: "center"}}>
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