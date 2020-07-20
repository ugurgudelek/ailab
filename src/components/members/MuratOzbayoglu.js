import React from 'react';
import { Link } from 'react-router-dom'

const MuratOzbayoglu = () => {
    return (
        <section className="page-section bg-light member">
            <header className="team-header-2 text-uppercase">Murat Ozbayoglu</header>
            <div className="bg-bis">
                <h3 className="p-6 text-left w-50 inline">Murat Ozbayoglu<br/>
                <span>Assosiate Professor</span><hr/>
                <Link to="/Team" className="text-dark"><i className=" pr-3" class="fas fa-long-arrow-alt-left"></i>Back to team</Link></h3>
                <img className="m-3 w-25" src={require("../../assets/img/team/2.jpg")} alt=""/>
            </div>
            <div className="bg-light">
                <p className="w-50 text-left inline mt-3 pl-5">mozbayoglu@etu.edu.tr<br/><a className="text-dark" href="http://mozbayoglu.etu.edu.tr/">http://mozbayoglu.etu.edu.tr/</a><br/>Tel: XXX-XXX-XX-XX</p>
                <p className="w-50 text-left inline mt-3 border-left pl-3 border-dark pr-3">
                I am an Associate Professor at TOBB University of Economics and Technology (ETU) at the Department of Computer Engineering. Before joining TOBB ETU faculty, I worked 4 years as a senior programmer/analyst at St. Louis (USA) based SunEdison (former MEMC Electronics). Prior to that I was a product development engineer/contractor/consultant at Beyond Inc. Before starting my professional carrier, I worked as a graduate research assistant at Missouri University of Science and Technology, working at Smart Engineering Systems Laboratuvary. My research interests include machine learning (theory and applications), pattern recognition, financial forecasting, machine vision, image processing, big data analytics, deep learning and evolutionary computation algorithms.</p>
            </div>
        </section>
    );
}
 
export default MuratOzbayoglu;

