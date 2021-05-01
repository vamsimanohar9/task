import React from 'react'
import{makeStyles} from "@material-ui/core/styles";
import{Grid,Paper, StylesProvider} from "@material-ui/core";
import './style.css'
import { FaLaptop} from "react-icons/fa";

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
function Clientside() {
    const classes = useStyles();
    return (
        <div className='fullbg'>
        <div className='backgrounds'>
        <Grid container spacing={3}   className={classes.grid} >
        <Grid item xl={3} lg={3} md={12} sm={12} xs={12} >
        <Paper className={classes.clientside} elevation={0}>
        <div>
        <p><span className='laptop'><FaLaptop /></span><span className='client'>Client Side</span></p>
        </div></Paper>
       
      </Grid>
        </Grid>
        </div>
        </div>
    )
}

export default Clientside
