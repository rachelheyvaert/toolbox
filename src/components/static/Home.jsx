import React from 'react'
import Typography from '@mui/material/Typography';

const Home = () => {
  
  return (
    <div style={{textAlign: "center"}}>
      <Typography variant="h3"  sx={{mt : '50px'}}> Welcome to the Therapy Tool Box!</Typography>
      <Typography variant="h6" color="text.secondary">A Planning Resource for ST, OT, PT, and ABA </Typography>
      <Typography variant="body1" sx={{margin: "60px"}}>
      The purpose of Tool Box is to provide professionals with personalized repository where relevant activites, exercises, and tasks can be listed, stored, and used to plan sessions for patients/clients.
      </Typography>
     
      </div>
  )
}

export default Home