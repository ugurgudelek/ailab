import React from 'react';
import '../css/styles.css';
import AvatarMale from './AvatarMale';
import AvatarFemale from './AvatarFemale';
 
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
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={require("../assets/img/murat_özbayoğlu.jpg")} alt="" />
                            <h4>Murat Özbayoğlu</h4>
                            <p className="text-dark">
                                Associate Professor at TOBB University
                                of Economics and Technology
                                at the Department of Computer Engineering.
                            </p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={require("../assets/img/m_fatih_demirci.jpg")} alt="" />
                            <h4>M.Fatih Demirci</h4>
                            <p className="text-dark">
                                Associate Professor of Computer Science
                                Nazarbayev University & TOBB University
                                of Economics and Technology
                            </p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-left">
                    <h3>PhD Students</h3>
                </div>
                <div className="row">
                    <AvatarMale/>
                    <AvatarFemale/>
                    <AvatarMale/>
                </div>
                <div className="text-left">
                    <h3>MSc Students</h3>
                </div>
                <div className="row">
                    <AvatarMale/>
                    <AvatarFemale/>
                    <AvatarMale/>
                </div>
                <div className="text-left">
                    <h3>Undergraduate Students</h3>
                </div>
                <div className="row">
                    <AvatarMale/>
                    <AvatarFemale/>
                    <AvatarMale/>
                </div>
                <div className="text-left">
                    <h3>Alumni</h3>
                </div>
                <div className="row">
                    <AvatarMale/>
                    <AvatarFemale/>
                    <AvatarMale/>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
    );
}
 
export default Team;