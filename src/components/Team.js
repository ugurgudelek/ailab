import React from 'react';
import '../css/styles.css';
import Member from './Member';
 
const Team = () => {
    return (
        <section className="page-section bg-secondary" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-dark">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="text-left">
                    <h3>Professors</h3>
                </div>
                <div className="row">
                    <Member name="Murat Özbayoğlu" title="Assosiacte Professor"/>
                    <Member name="M.Fatih Demirci" title="Assosiacte Professor"/>
                </div>
                <div className="text-left">
                    <h3>PhD Students</h3>
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
                    <h3>MSc Students</h3>
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
                    <h3>Undergraduate Students</h3>
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
                    <h3>Alumni</h3>
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