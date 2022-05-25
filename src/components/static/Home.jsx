import React from 'react'
import Typography from '@mui/material/Typography';
import HandymanIcon from '@mui/icons-material/Handyman';
const Home = () => {
  
  return (
    <div style={{textAlign: "center"}}>
      <Typography variant="h2"  sx={{mt : '50px'}} style={{color:"#023047"}}> Welcome to the Therapy Tool Box!</Typography>
      <Typography variant="h4" style={{color:"#ffb703"}}>A Planning Resource for ST, OT, PT, and ABA </Typography> <HandymanIcon></HandymanIcon>
      <HandymanIcon></HandymanIcon>
      <Typography variant="h5" style={{color:"#023047"}} sx={{margin: "60px"}}>
      The purpose of Tool Box is to provide professionals with personalized repository where relevant activites, exercises, and tasks can be listed, stored, and used to plan sessions for patients/clients. The default activities listed are geared towards pediatric speech therapy, but can be deleted and replaced. 
      Happy planning!
      </Typography>
 
      </div>
  )
}

export default Home