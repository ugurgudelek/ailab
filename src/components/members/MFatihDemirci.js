import React from 'react';
import { Link } from 'react-router-dom'

const MFatihDemirci = () => {
    return (
        <section className="page-section bg-light member">
            <header className="team-header-2 text-uppercase">M. Fatih Demirci</header>
            <div className="bg-bis">
                <h3 className="p-6 text-left w-50 inline">M. Fatih Demirci<br/>
                <span>Assosiate Professor</span><hr/>
                <Link to="/Team" className="text-dark"><i className=" pr-3" class="fas fa-long-arrow-alt-left"></i>Back to team</Link></h3>
                <img className="m-3 w-25" src={require("../../assets/img/team/2.jpg")} alt=""/>
            </div>
            <div className="bg-light">
                <p className="w-50 text-left inline mt-3 pl-5">mfdemirci@etu.edu.tr<br/><a className="text-dark" href="http://mfdemirci.etu.edu.tr/">http://mfdemirci.etu.edu.tr/</a><br/>Tel: XXX-XXX-XX-XX</p>
                <p className="w-50 text-left inline mt-3 border-left pl-3 border-dark pr-3">
                    Fatih Demirci is an associate professor at Computer Engineering Department, TOBB University of Economics and Technology.
                    His research interests lie predominately in the area of Computer Vision, particularly with respect to object recognition, 
                    image classification, shape indexing and applied graph theory.</p>
            </div>
        </section>
    );
}
 
export default MFatihDemirci;

