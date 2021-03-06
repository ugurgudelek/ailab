import React from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom'

const Professors = () => {
    return (
        <section className="page-section bg-dark-2" id="profs">
            <div className="container">
                <div className="text-left">
                    <h3 className="text-white border-top border-bottom pt-3 pb-3">Professors</h3>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="team-member team-member-2">
                            <img className="mx-auto rounded-circle-2 mt-4" src={require("../assets/img/team/murat_özbayoğlu.jpg")} alt=""/>
                            <h4 className="text-white">Murat Ozbayoglu</h4>
                            <p className="text-white">Associate Professor<br/>TOBB University</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-member team-member-2">
                            <img className="mx-auto rounded-circle-2 mt-4" src={require("../assets/img/team/m_fatih_demirci.jpg")} alt=""/>
                            <h4 className="text-white">Fatih Demirci</h4>
                            <p className="text-white">Associate Professor<br/>TOBB University</p>
                        </div>
                    </div>
                </div>
                <Link className="text-white font-30" to="/Team">See all the team
                    <i class="fas fa-angle-double-right ml-3 font-30"></i>
                </Link>
            </div>
        </section>
    );
}
 
export default Professors;
