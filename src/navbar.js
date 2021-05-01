import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import{Grid,Paper, StylesProvider} from "@material-ui/core";
import './style.css'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
  },
  grid:{
    width:'100%',
    margin:'0px'
  },
  clientside:{
    backgroundColor:'transparent',
    height:40,
    border: "5px solid #18222d",

  }
}));

export default function Navbar() {
    
  const classes = useStyles();

  return (
      
    <AppBar position="static" style={{backgroundColor:"#18222d"}} elevation={0}>
      
    <Toolbar>
      
      <Typography variant="h6" className='headlogo'>
        <img src='https://i.ibb.co/pd5JGm1/logo-white.png' width='120px'></img>
      </Typography>
      
    </Toolbar>
  </AppBar>
        
  );
}


