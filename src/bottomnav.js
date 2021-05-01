import React from 'react'
import{makeStyles} from "@material-ui/core/styles";
import{Grid,Paper, StylesProvider} from "@material-ui/core";
import './style.css'
import { FaAngleLeft,FaServer,FaCloud,FaAngleRight} from "react-icons/fa";
import {Link} from 'react-router-dom';
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

function BottomNav() {
    const classes = useStyles();
    return (
        <div id='bottomnav' className='fullbg'>
        <div  className='backgrounds'>
        <Grid container spacing={3}   className={classes.grid} >
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} >
        <Paper className={classes.clientside} elevation={0}>
        <div>
        <p><span className='laptop5'><FaAngleLeft /></span><span className='client1'>Our Services</span></p>
        </div></Paper>
       
      </Grid>
      {/* <Grid item xl={3} lg={3} md={0} sm={0} xs={0} >
        <Paper className={classes.clientside} elevation={0}>
        </Paper>
       
      </Grid>
      <Grid item xl={3} lg={3} md={0} sm={0} xs={0} >
        <Paper className={classes.clientside} elevation={0}>
        </Paper>
       
      </Grid> */}
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6} >
        <Paper className={classes.clientside} elevation={0}>
        <div id='rightfloat'>
       <Link to='Pagetwo' style={{ textDecoration: 'none' }}> <p><span className='client1'>Expected Completion Time</span><span className='laptop5'><FaAngleRight /></span></p></Link>
        </div></Paper>
       
      </Grid>
        </Grid>
        </div>
        </div>
    )
}

export default BottomNav
