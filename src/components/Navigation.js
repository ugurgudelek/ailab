import React from 'react';
import '../css/styles.css';

import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
   return (
      <div className="App">
         <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={require("../assets/img/navbar-logo.svg")} alt="" /></a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fas fa-bars ml-1"></i></button>
               <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav text-uppercase ml-auto">
                     <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/">Home</NavLink></li>
                     <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/About">About</NavLink></li>
                     <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/Team">Team</NavLink></li>
                     <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/Projects">Projects</NavLink></li>
                     <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/Publications">Publications</NavLink></li>
                     <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/Contact">Contact</NavLink></li>

                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}
 
export default Navigation;