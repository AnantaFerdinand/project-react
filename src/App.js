//import logo from './logo.svg';
import React from "react";
import './App.css';
import{BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Global from "./Pages/Global";
import Indonesia from "./Pages/Indonesia";
import Provinsi from "./Pages/Provinsi";

const App=()=>{
return( 
       <Router>
           <div>
             <p>Ananta Ferdinand Lolo</p>
               <h1>Covid Tracker</h1>
        <nav>
          <ul>
            <li>
              <Link to="/Global">Global</Link>
            </li>

            <li>
              <Link to="/Indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/Provinsi">Provinsi</Link>
            </li>
          </ul>
        </nav>
   
           <Switch>
               <Route path="/Global">
                   <Global/>
               </Route>

               <Route path="/Indonesia">
                   <Indonesia/>
               </Route>

               <Route path="/Provinsi">
                   <Provinsi/>
               </Route>
           </Switch>
 </div>
       </Router>

 );
};

export default App;