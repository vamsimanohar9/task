import React from 'react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clientside from './clientside';
import Colmtwo from './colmtwo';
import Serverside from './serverside';
import Headerone from './header';
import Navbar from './navbar';
import Line from './line';
import BottomNav from './bottomnav';


function Home() {
    return (
        <div>
    <Navbar />
    <Line />
    <Headerone />
    <Clientside  />
    <App  />
    <Serverside />
    <Colmtwo />
    <BottomNav />
        </div>
    )
}

export default Home
