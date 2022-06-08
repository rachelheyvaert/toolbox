import * as React from 'react';
import {useState} from "react"
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


const Form =({onAddActivity}) =>{
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    area: "",
    isPlanned: false,
  })
   const formDataEmpty = {
      name: "",
      image: "",
      description: "",
      area: "",
      isPlanned: false
    }

  function handleSubmit(e){
    console.log(e)
    e.preventDefault()
   
    fetch(`http://localhost:3001/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
     formData
      ),
    })
      .then((r) => r.json())
      .then((newAct) => onAddActivity(newAct));
     setFormData(formDataEmpty);
  }
function handleChange(e) {
 const key = e.target.id
  setFormData({
    ...formData,
[key]: e.target.value,
  })
}
  return (
    <div >
   <Typography sx={{ flexGrow: 5 }}  mt="20px" variant="h3" align="center" style={{color:"#023047"}}>
          Create an Activity</Typography>
    <Box  sx={{ '& > :not(style)': { m: 8} }} style={{backgroundColor:"#219ebc", textAlign: "center", marginLeft:"10%", marginRight: "10%", marginTop:"3%"}}>
      <FormControl  variant="standard" onSubmit={handleSubmit} >
      <InputLabel style={{color:"#ffb703"}}> Title of Activity..</InputLabel>
        <Input 
          id="name"
          value={formData.name}
          onChange={handleChange}
          color="warning"
        />
        </FormControl>
        <FormControl>
        <InputLabel style={{color:"#ffb703"}}>Target Area</InputLabel>
        <Input
          id="area"
          value={formData.area}
          onChange={handleChange}
          color="warning"
        />
        <FormHelperText style={{color:"white"}}>
          Langauge, Articulation, Pagmatics, Fluency, etc.
        </FormHelperText>
        </FormControl>
        <FormControl >
        <InputLabel style={{color:"#ffb703"}} htmlFor="component-helper">Description</InputLabel>
        <Input
          id="description"
          value={formData.description}
          onChange={handleChange}
          color="warning"
        />
        <FormHelperText  style={{color:"white"}}>
          What is the purpose of the activity?
        </FormHelperText>
        </FormControl>
        <FormControl >
        <InputLabel style={{color:"#ffb703"}} htmlFor="component-outlined">Picture</InputLabel>
        <OutlinedInput
          id="image"
          value={formData.image}
          onChange={handleChange}
          label="name"
          color="warning"
        />
         <FormHelperText style={{color:"white"}}>
          Link an image 
        </FormHelperText>
      </FormControl>
      <Button  onClick={handleSubmit} style={{backgroundColor:"#fb8500"}} type="submit" variant="contained">Add Activity</Button>
    </Box>
    </div>
  );
}

export default Form;