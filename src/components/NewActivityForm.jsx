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
import { Typography } from '@mui/material';


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
    const formData = {name: "",
      image: "",
      description: "",
      area: "",
      isPlanned: false
    }
    fetch(`http://localhost:3001/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        name: formData.name,
        image: formData.image,
        description: formData.description,
        area: formData.area,
        isPlanned: false,
      }),
    })
      .then((r) => r.json())
      .then((newAct) => onAddActivity(newAct));
      <Navigate to="/activities/new" replace={true} />
     setFormData(formData)
  }
function handleChange(e) {
 const key = e.target.id
  setFormData({
    ...formData,
[key]: e.target.value,
  })
  console.log(key)
}
//trying to change color of inputs
  return (
    <div>
   <Typography sx={{ flexGrow: 5 }} mt="20px"variant="h3" align="center" style={{color:"#023047"}} >
          Create an Activity</Typography>
    <Box onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 8},
        
      }}
      noValidate
      autoComplete="off"
      style={{textAlign: "center", backgroundColor:"#219ebc", marginLeft:"10%", marginRight: "10%"}}
    >
      <FormControl  variant="standard" >
      <InputLabel style={{backgroundColor:"ffb703"}} > Title of Activity..</InputLabel>
        <Input style={{backgroundColor:"ffb703"}}
          id="name"
          value={formData.name}
          onChange={handleChange}
          
        />
        </FormControl>
        <FormControl >
        <InputLabel htmlFor="component-helper">Target Area</InputLabel>
        <Input
          id="area"
          value={formData.area}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          Langauge, Articulation, Pagmatics, Fluency, etc.
        </FormHelperText>
        </FormControl>
        <FormControl >
        <InputLabel htmlFor="component-helper">Description</InputLabel>
        <Input
          id="description"
          value={formData.description}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          What is the purpose of the activity?
        </FormHelperText>
        </FormControl>
        <FormControl >
        <InputLabel htmlFor="component-outlined">Picture</InputLabel>
        <OutlinedInput
          id="image"
          value={formData.image}
          onChange={handleChange}
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