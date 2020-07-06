import React from 'react';
import '../css/styles.css';
import Member from './Member';
 
const Team = () => {
    return (
        <section className="page-section bg-light mt-4 pb-0" id="team">
            <h3 className="text-center bg-dark-2 text-light pt-4 pb-4 mt-0 mb-5 w-100">TEAM</h3>
            <div className="container">
                <div className="text-left">
                    <h3 className="team-header mb-5">Professors</h3>
                </div>
                <div className="row">
                    <Member name="Murat Özbayoğlu" title="Assosiacte Professor" link="MuratOzbayoglu"/>
                    <Member name="M.Fatih Demirci" title="Assosiacte Professor" link="MFatihDemirci"/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5">PhD Students</h3>
                </div>
                <div className="row">
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5">MSc Students</h3>
                </div>
                <div className="row">
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5">Undergraduate Students</h3>
                </div>
                <div className="row">
                    <Member name="Furkan Dolaşık" title="Student" link="FurkanDolasik"/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5">Alumni</h3>
                </div>
                <div className="row">
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
    );
}
 
export default Team;