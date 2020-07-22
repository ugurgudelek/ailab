import React from 'react';
import { Link } from 'react-router-dom'

const OzgenilMeric = () => {
    return (
        <section className="page-section bg-light member">
            <header className="team-header-2 text-uppercase">Ozgenil Meric</header>
            <div className="bg-bis">
                <h3 className="p-6 text-left w-50 inline">Ozgenil Meric<br/>
                <span>MSc Student</span><hr/>
                <Link to="/Team" className="text-dark"><i className=" pr-3" class="fas fa-long-arrow-alt-left"></i>Back to team</Link></h3>
                <img className="m-3 w-25" src={require("../../assets/img/team/2.jpg")} alt=""/>
            </div>
            <div className="bg-light">
                <p className="w-50 text-left inline mt-3 pl-5">username@gmail.com</p>
                <p className="w-50 text-left inline mt-3 border-left pl-3 border-dark pr-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quidem sed perspiciatis, officiis necessitatibus minus exercitationem incidunt nobis quaerat alias saepe nesciunt, explicabo aut in dicta modi accusantium sapiente voluptatum corrupti, dignissimos rerum illo eaque. Amet molestias, eveniet excepturi enim neque laboriosam officiis quam, adipisci nobis animi ipsam facere tempora.</p>
            </div>
        </section>
    );
}
 
export default OzgenilMeric;
