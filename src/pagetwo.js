import React from 'react'
import Calender from './calender'
import Navbar from './navbar';
import Line from './line';
import BottomNav2 from './bottomnav2';
import Header2 from './header2';
import './style.css'
import Addspace from './addspace';
function Pagetwo() {
    return (
        <div>
            <Navbar />
            <Line />
            <Header2 />
            <Calender />
           <Addspace />
            <BottomNav2 />
            
        </div>
    )
}

export default Pagetwo
