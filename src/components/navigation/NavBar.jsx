import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Toolbox
          </Typography>
          <Button color="inherit" component={Link}  to="/">Home</Button>
          <Button color="inherit" component={Link}  to="/activitieslist">Activities List</Button>
          <Button color="inherit" component={Link} to="/activities/planned">Planner</Button>
          <Button color="inherit" component={Link} to="/activities/add">Add Activity</Button>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavBar;