import './App.css';
import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User from './User'
function Changing() {
  let user1=[
    {name:'anil',id:1},
    {name:'peter',id:2},
    {name:'bruce',id:3},
    {name:'tony',id:4},
  ]
  return (
    <div className="App">
      <Router>
      <h1>React Dynamic Routing</h1>
      {
        user1.map((item)=>
      <button><Link to={"/user1/"+item.id}>{item.name}</Link></button>)
      }
      <Route path="/user1/:id/" ><User /></Route>
      </Router>
    </div>
  );
}
export default Changing
