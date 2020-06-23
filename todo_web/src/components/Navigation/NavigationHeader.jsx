import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

import './NavigationHeader.css';

function NavigationHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        
        <Typography variant="h6" style={{'margin': '1%'}} >
          <NavLink to='/' exact activeClassName="link-active-style" className="link-style">
              HOME
          </NavLink>
        </Typography>
        <Typography variant="h6" style={{'margin': '1%'}} >
        <NavLink to='/todo' exact activeClassName="link-active-style" className="link-style">
              TODO
          </NavLink>
        </Typography>
        <Typography variant="h6" style={{'margin': '1%'}} >
        <NavLink to='/timer' exact activeClassName="link-active-style" className="link-style">
              TIMER
          </NavLink>
        </Typography>
        
       
      </Toolbar>
    </AppBar>
  );
}

export default NavigationHeader;
