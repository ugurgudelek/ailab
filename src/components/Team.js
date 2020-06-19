import React from 'react';
import '../css/styles.css';
import AvatarMale from './AvatarMale';
import AvatarFemale from './AvatarFemale';
 
const Team = () => {
    return (
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <AvatarMale/>
                    <AvatarMale/>
                    <AvatarFemale/>
                    <AvatarFemale/>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
    );
}
 
export default Team;