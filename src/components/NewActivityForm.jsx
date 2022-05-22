import * as React from 'react';
import {useState} from "react"
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { Navigate } from "react-router-dom"


const NewActivityForm =({onAddActivity}) =>{
const [formData, setFormData] = useState({
name: "",
image: "",
description: "",
area: "",
isPlanned: false,
})

  function handleSubmit(e){
    e.preventDefault()
    const formData = {
      name: "",
      image: "",
      description: "",
      area: "",
      isPlanned: false,
    }
    fetch(`http://localhost:3001/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "",
        area: "",
        image: "",
        description: "",
        isPlanned: false
      }),
    })
      .then((r) => r.json())
      .then((newAct) => onAddActivity(newAct));
      <Navigate to="/activities/new" replace={true} />
     setFormData(formData)
  }

  return (
    <div>
    <h1 style={{textAlign: "center"}}>Create a New Tool</h1>
    <Box onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 8},
        
      }}
      noValidate
      autoComplete="off"
      style={{textAlign: "center", backgroundColor:"#cba477", marginLeft:"10%", marginRight: "10%"}}
    >
      <FormControl variant="standard">
      <InputLabel htmlFor="component-helper"> Title of Activity..</InputLabel>
        <Input
          id="component-helper"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name:e.target.value})}
          aria-describedby="component-helper-text"
        />
        </FormControl>
        <FormControl >
        <InputLabel htmlFor="component-helper">Target Area</InputLabel>
        <Input
          id="component-helper"
          value={formData.area}
          onChange={(e) => setFormData({...formData, area:e.target.value})}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Langauge, Articulation, Pagmatics, Fluency, etc.
        </FormHelperText>
        </FormControl>
        <FormControl >
        <InputLabel htmlFor="component-helper">Description</InputLabel>
        <Input
          id="component-helper"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description:e.target.value})}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          What is the purpose of the activity?
        </FormHelperText>
        </FormControl>
        <FormControl >
        <InputLabel htmlFor="component-outlined">Picture</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={formData.image}
          onChange={(e) => setFormData({...formData, image:e.target.value})}
          label="Name"
        />
         <FormHelperText id="component-helper-text">
          Link an image 
        </FormHelperText>
      </FormControl>
      <Button type="submit" variant="contained">Add Activity</Button>
    </Box>
    </div>
  );
}
export default NewActivityForm;