import React from 'react';
import { Link } from 'react-router-dom'

const MuhammedYilmaz = () => {
    return (
        <section className="page-section bg-light member">
            <header className="team-header-2 text-uppercase">Omer Berat Sezer</header>
            <div className="bg-bis">
                <h3 className="p-6 text-left w-50 inline mobile-name">Omer Berat Sezer<br/>
                <span>PhD Student(Graduation: May 2018)</span><hr/>
                <Link to="/Team" className="text-dark"><i className=" pr-3" class="fas fa-long-arrow-alt-left"></i>Back to team</Link></h3>
                <img className="m-3 w-25 member-image" src={require("../../assets/img/team/2.jpg")} alt=""/>
            </div>
            <div className="bg-light">
                <p className="w-50 text-left inline mt-3 pl-5 mobile-info">username@etu.edu.tr<br/><a className="text-dark" href="#!">http://username.etu.edu.tr/</a><br/>Tel: XXX-XXX-XX-XX</p>
                <p className="w-50 text-left inline mt-3 border-left pl-3 border-dark pr-3 mobile-about">
                Thesis: Analysis and Optimization of Time Series Data with Deep Artificial Neural Networks: Financial Estimation Algorithms</p>
            </div>
        </section>
    );
}
 
export default MuhammedYilmaz;

