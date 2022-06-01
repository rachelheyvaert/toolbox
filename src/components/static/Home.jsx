import React from 'react'
import Typography from '@mui/material/Typography';
import HandymanIcon from '@mui/icons-material/Handyman';
const Home = () => {
  
  return (
    <div style={{textAlign: "center"}}>
      <Typography variant="h2"  sx={{mt : '50px'}} style={{color:"#023047"}}> Welcome to Your Tool Box!</Typography>
      <Typography variant="h4" style={{color:"#ffb703"}}>A Planning Resource </Typography> 
      <Typography variant="h5" style={{color:"#023047"}} sx={{margin: "60px", ml:"20%", mr:"20%"}}>
      The goal of Tool Box is to provide the user with a personalized repository where relevant activities, exercises, and tasks can be listed, stored, and used to plan sessions for clients. The default activities listed are geared towards pediatric speech therapy, but can be deleted and replaced.
     Happy planning!
      </Typography>
      <HandymanIcon></HandymanIcon>
      <HandymanIcon></HandymanIcon>
      </div>
  )
}

export default Home