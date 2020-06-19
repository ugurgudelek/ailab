import React from 'react';
import '../css/styles.css';

const AvatarMale = () => {
    return (
        <div className="col-lg-4">
            <div className="team-member">
                <img className="mx-auto rounded-circle" src={require("../assets/img/team/avatar_male.png")} alt="" />
                <h4>Kay Garland</h4>
                <p className="text-muted">Lead Designer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    );
}
 
export default AvatarMale;
