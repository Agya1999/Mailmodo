import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../Images/logo.svg';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import './Header.css';



export default function ButtonAppBar() {
 
  return (
    <div className="Container">
      <AppBar position="static">
        <Toolbar>
            <img src ={logo} alt ="logo" className="Logo"/>

          <Typography variant="h6" className="Brand">
            Intguine
          </Typography>
          <div className="HeaderItems">
          <Typography variant="h6" className="items">
            Home
          </Typography>
           <Typography variant="h6" className="items">
            Brand
          </Typography>
          <Typography variant="h6" className="items">
            Transporters
          </Typography>

          <IconButton edge="start" className="usericon" color="inherit" aria-label="menu">
            < PersonOutlineTwoToneIcon/>
            
          </IconButton>
          <IconButton edge="start" className="usericon" color="inherit" aria-label="menu">
            < ExpandMoreTwoToneIcon/>
            
          </IconButton>

          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
