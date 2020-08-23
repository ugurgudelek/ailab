import React from 'react';
import '../css/styles.css';
 
const About = () => {
    return (
        <section className="bg-light mt-4 page-section pb-0" id="team">
            <h3 className="text-center bg-dark-2 text-light pt-4 pb-4 mt-0 mb-0">ABOUT</h3>
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../assets/img/about/1.jpg")} alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2009-2011</h4>
                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">We are working on Artificial Intelligience researches in TOBB ETU's TM-204 class.</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../assets/img/about/2.jpg")} alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>March 2011</h4>
                                    <h4 className="subheading">An Agency is Born</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../assets/img/about/3.jpg")} alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>December 2012</h4>
                                    <h4 className="subheading">Transition to Full Service</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../assets/img/about/4.jpg")} alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>July 2014</h4>
                                    <h4 className="subheading">Phase Two Expansion</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image bg-dark">
                                <h4 className="text-white">Be Part<br />Of Our<br />Story!</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}
 
export default About;