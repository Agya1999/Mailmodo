import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../Images/logo.svg';

import './Header.css';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
    
    
//   },
// }));

export default function ButtonAppBar() {
 
  return (
    <div className="logo">
      <AppBar position="static">
        <Toolbar>
            <img src ={logo} alt ="logo"/>

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

          {/* <PersonTwoToneIcon/>
          <KeyboardArrowDownTwoToneIcon/> */}

          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
