import React from 'react';
import '../css/styles.css';
import { NavLink } from 'react-router-dom';
import OwnDropdown from './OwnDropdown';
 
const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-gray" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" target="_blank" rel="noopener noreferrer" href="https://www.etu.edu.tr/tr"><img src={require("../assets/img/tobb_etu_dikey_en.png")} alt="" /></a>
                    <div className="">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><NavLink exact className="nav-link js-scroll-trigger text-dark-2" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger text-dark-2" to="/about">About</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger text-dark-2" to="/team">Team</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger text-dark-2" to="/projects">Projects</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger text-dark-2" to="/publications">Publications</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link js-scroll-trigger text-dark-2" to="/contact">Contact</NavLink></li>
                            <li><OwnDropdown/></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Navigation;