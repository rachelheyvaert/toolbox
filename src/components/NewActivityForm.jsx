import * as React from 'react';
import {useState} from "react"
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const NewActivityForm =({onAddActivity}) =>{
  const [name, setName] = useState('');
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [area, setArea] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:3001/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        area: area,
        image: image,
        description: description,
        isPlanned: false
      }),
    })
      .then((r) => r.json())
      .then((newAct) => onAddActivity(newAct));
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
      style={{textAlign: "center"}}
    >
      <FormControl variant="standard">
      <InputLabel htmlFor="component-helper"> Title of Activity..</InputLabel>
        <Input
          id="component-helper"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-describedby="component-helper-text"
        />
        </FormControl>
        <FormControl >
        <InputLabel htmlFor="component-helper">Target Area</InputLabel>
        <Input
          id="component-helper"
          value={area}
          onChange={(e) => setArea(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
          value={image}
          onChange={(e) => setImage(e.target.value)}
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