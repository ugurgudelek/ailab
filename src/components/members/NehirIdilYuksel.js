import React from 'react';
import { Link } from 'react-router-dom'

const NehirIdilYuksel = () => {
    return (
        <section className="page-section bg-light member">
            <header className="team-header-2 text-uppercase">Nehir Idil Yuksel</header>
            <div className="bg-bis">
                <h3 className="p-6 text-left w-50 inline mobile-name">Nehir Idil Yuksel<br/>
                <span>Student</span><hr/>
                <Link to="/Team" className="text-dark"><i className=" pr-3" class="fas fa-long-arrow-alt-left"></i>Back to team</Link></h3>
                <img className="m-3 w-25 member-image" src={require("../../assets/img/team/nehiridilyuksel.png")} alt=""/>
            </div>
            <div className="bg-light">
                <p className="w-50 text-left inline mt-3 pl-5 mobile-info">idilyuksel@gmail.com <br/></p>
                <p className="w-50 text-left inline mt-3 border-left pl-3 border-dark pr-3 mobile-about">Nehir İdil Yüksel is currently continuing her undergraduate studies in Computer Engineering department at TOBB University of Economics and Technology. Her research interests are machine learning, natural language processing and image processing. She worked as a data science intern for 3 months at STM. Recently she carries out studies on Detection of Personality Traits from Handwritings.</p>
            </div>
        </section>
    );
}
 
export default NehirIdilYuksel;
