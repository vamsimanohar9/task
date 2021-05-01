import React, {useState} from 'react';
import{makeStyles} from "@material-ui/core/styles";
import{Grid,Paper, StylesProvider} from "@material-ui/core";
import './style.css'
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
function Headerone() {
    const classes = useStyles();
    return (
        <div className='fullbg'>
        <div className='backgrounds'>
        <Grid container spacing={3}   className={classes.grid} >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
        <Paper className={classes.clientside} elevation={0}>
        <div>
        <p className='card-title6'>Technologies i want to use.</p>
        </div></Paper>
       
      </Grid>
        </Grid>
        </div>
        </div>
    )
}

export default Headerone
