import React from 'react';
import '../css/styles.css';

import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-gray" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" target="_blank" rel="noopener noreferrer" href="https://www.etu.edu.tr/tr"><img src={require("../assets/img/tobb_etu_dikey_en.png")} alt="" /></a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fas fa-bars ml-1"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger text-dark" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger text-dark" to="/About">About</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger text-dark" to="/Team">Team</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger text-dark" to="/Projects">Projects</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger text-dark" to="/Publications">Publications</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger text-dark" to="/Contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Navigation;