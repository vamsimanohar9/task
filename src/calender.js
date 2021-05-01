import React from 'react'
import './calender.css'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import{makeStyles} from "@material-ui/core/styles";
import{Grid,Paper, StylesProvider} from "@material-ui/core";
import './style.css'
import { FaCheckCircle} from "react-icons/fa";

const useStyles = makeStyles((theme)=>({
    grid:{
      width:'100%',
      margin:'0px'
    },
    clientside:{
      backgroundColor:'transparent',
  
    }
  }));

function Calender() {
    const classes = useStyles();
    return (
        <div className='fullbg'>
        <div className='backgrounds'>
        <Grid container spacing={3}   className={classes.grid} >
        <Grid item xl={5} lg={5} md={6} sm={6} xs={6} >
        <Paper className={classes.clientside} elevation={0}>
        <div>
        <CalendarComponent></CalendarComponent>
        </div></Paper>
       
      </Grid>
      <Grid item xl={2} lg={2} md={12} sm={12} xs={12} >
        <Paper className={classes.clientside} elevation={0}>
        <div class='middlepart'>
           <p id='checkicon'><FaCheckCircle /></p>
           <p id='month'>1 Month 20 Days</p>
        </div></Paper>
       
      </Grid>
      <Grid item xl={5} lg={5} md={6} sm={6} xs={6} >
        <Paper className={classes.clientside} elevation={0}>
        <div>
            <CalendarComponent></CalendarComponent>
        </div></Paper>
       
      </Grid>
        </Grid>
        </div>
        </div>
    )
}

export default Calender
