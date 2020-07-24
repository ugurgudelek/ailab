import React from 'react';
import { Link } from 'react-router-dom'

const IzzetBarisOzturk = () => {
    return (
        <section className="page-section bg-light member">
            <header className="team-header-2 text-uppercase">Izzet Baris Ozturk</header>
            <div className="bg-bis">
                <h3 className="p-6 text-left w-50 inline mobile-name">Izzet Baris Ozturk<br/>
                <span>MSc Student</span><hr/>
                <Link to="/Team" className="text-dark"><i className=" pr-3" class="fas fa-long-arrow-alt-left"></i>Back to team</Link></h3>
                <img className="m-3 w-25 member-image" src={require("../../assets/img/team/izzetbarisozturk.jpg")} alt=""/>
            </div>
            <div className="bg-light">
                <p className="w-50 text-left inline mt-3 pl-5 mobile-info">izzetbarisozturk@gmail.com<br/></p>
                <p className="w-50 text-left inline mt-3 border-left pl-3 border-dark pr-3 mobile-about">İzzet Barış Öztürk received his bachelor's degree in Computer Engineering from the Middle East Technical University in June 2017. He started his graduate education at the Computer Engineering Department of TOBB University of Economics and Technology and continues his education. His research interests are artificial intelligence, machine learning, computer vision, image processing and recognition, pattern recognition. Today, He is working on making accurate predictions about future tenders by using the information obtained from the old Public Tenders.</p>
            </div>
        </section>
    );
}
 
export default IzzetBarisOzturk;
