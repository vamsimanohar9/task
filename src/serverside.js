import React from 'react'
import{makeStyles} from "@material-ui/core/styles";
import{Grid,Paper, StylesProvider} from "@material-ui/core";
import './style.css'
import {FaServer,FaCloud} from "react-icons/fa";

const useStyles = makeStyles((theme)=>({
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
function Serverside() {
    const classes = useStyles();
    return (
        <div className='fullbg'>
        <div className='backgrounds'>
        <Grid container spacing={3}   className={classes.grid} >
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12} >
        <Paper className={classes.clientside} elevation={0}>
        <div>
        <p><span className='laptop'><FaServer /></span><span className='client'>Server side</span></p>
        </div></Paper>
       
      </Grid>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12} >
        <Paper className={classes.clientside} elevation={0}>
        <div>
        <p><span className='laptop'><FaCloud /></span><span className='client'>Cloud services</span></p>
        </div></Paper>
       
      </Grid>
        </Grid>
        </div>
        </div>
    )
}

export default Serverside
