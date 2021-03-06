import React, {useState} from 'react';
import{makeStyles} from "@material-ui/core/styles";
import{Grid,Paper, StylesProvider} from "@material-ui/core";
import './style.css'

const useStyles = makeStyles((theme)=>({
  grid:{
    width:'100%',
    margin:'0px'
  },
  paper1:{
    padding:theme.spacing(2),
    textAlign:'center',
    color:theme.palette.text.secondary,
    backrgound:theme.palette.success.light,
    backgroundColor:'transparent',
    height:100,
    border: "1px solid #00FF00",

  },
  paper:{
    padding:theme.spacing(2),
    textAlign:'center',
    color:theme.palette.text.secondary,
    backrgound:theme.palette.success.light,
    backgroundColor:'transparent',
    height:100,
    border: "1px solid #babdc0",
  }
}));

export default function App() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  const [isActive2, setActive2] = useState("false");
  const handleToggle2 = () => {
    setActive2(!isActive2);
  };
  const [isActive3, setActive3] = useState("false");
  const handleToggle3 = () => {
    setActive3(!isActive3);
  };
  const [isActive4, setActive4] = useState("false");
  const handleToggle4 = () => {
    setActive4(!isActive4);
  };

  const classes = useStyles();
  return (
    <div className='fullbg'>  
    <div className='backgrounds'>
    <Grid container spacing={3}   className={classes.grid}>
      <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
        <Paper onClick={handleToggle} className={isActive ? classes.paper : classes.paper1}>
        <div>
          <img className='imageout' src="https://i.ibb.co/ykzx0RR/1.png" alt='img'></img>
          <div className='textang'>
          <p id='text1' class="card-title">Angular</p>
      <p id='text2' class="card-text">Projects we did : 1</p>
          </div>
        </div></Paper>
       
      </Grid>
      <Grid  item  xl={3} lg={3} md={12} sm={12} xs={12}>
      <Paper onClick={handleToggle2} className={isActive2 ? classes.paper : classes.paper1}>
        <div>
          <img className='imageout' src="https://i.ibb.co/J3dLT9k/2.png" alt='img'></img>
          <div  className='textang2'>
          <p id='text1' class="card-title">React<span id='green-point'>.</span>js</p>
      <p id='text2' class="card-text">Projects we did : 2</p>
          </div>
        </div>
        </Paper>
      </Grid>
      <Grid item  xl={3} lg={3} md={12} sm={12} xs={12}> 
      <Paper onClick={handleToggle3} className={isActive3 ? classes.paper : classes.paper1}>
        <div>
          <img className='imageout' src="https://i.ibb.co/6NpjZpH/3.png" alt='img'></img>
          <div className='textang2'>
          <p id='text1' class="card-title">Vue<span id='green-point'>.</span>js</p>
      <p id='text2' class="card-text">Projects we did : 1</p>
          </div>
        </div>
        </Paper>
      </Grid>
      <Grid item  xl={3} lg={3} md={12} sm={12} xs={12}>
      <Paper onClick={handleToggle4} className={isActive4 ? classes.paper : classes.paper1}>
        <div>
          <img className='imageout' src="https://i.ibb.co/3BHSJF4/4.png" alt='img'></img>
          <div className='textang3'>
          <p id='card3' class="card-title">Classic website</p>
      <p class="card-text">Projects we did : 5</p>
          </div>
        </div>
        </Paper>
      </Grid>
    </Grid>
    </div>
    </div>
  );
  }


