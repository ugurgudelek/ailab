import React from 'react';
import { Link } from 'react-router-dom'

const UgurGudelek = () => {
    return (
        <section className="page-section bg-light member">
            <header className="team-header-2 text-uppercase">Ugur Gudelek</header>
            <div className="bg-bis">
                <h3 className="p-6 text-left w-50 inline mobile-name">Ugur Gudelek<br/>
                <span>PhD Student</span><hr/>
                <Link to="/Team" className="text-dark"><i className=" pr-3" class="fas fa-long-arrow-alt-left"></i>Back to team</Link></h3>
                <img className="m-3 w-25 member-image" src={require("../../assets/img/team/ugurgudelek.jpeg")} alt=""/>
            </div>
            <div className="bg-light">
                <p className="w-50 text-left inline mt-3 pl-5 mobile-info">ugudelek@etu.edu.tr<br/><a className="text-dark" href="http://ugudelek.etu.edu.tr/">http://ugudelek.etu.edu.tr/</a><br/>Tel: XXX-XXX-XX-XX</p>
                <p className="w-50 text-left inline mt-3 border-left pl-3 border-dark pr-3 mobile-about">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam molestiae cumque adipisci quisquam excepturi hic sequi ipsam temporibus, expedita corrupti. Vitae illum quo soluta nam ea, ex quia cum deserunt expedita ipsam quidem earum, saepe voluptates aspernatur vel laboriosam quas minima? Esse obcaecati possimus magnam illum. Vitae error debitis doloremque.</p>
            </div>
        </section>
    );
}
 
export default UgurGudelek;

