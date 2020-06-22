import React from 'react';
import '../css/styles.css';

function Member (props) {
    return (
        <div className="col-lg-3">
            <div className="team-member">
                <a href={props.link}><img className="mx-auto rounded-circle" src={require("../assets/img/team/avatar_male.png")} alt=""/></a>
                <h4>{props.name}</h4>
                <p className="text-dark">{props.title}</p>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    );
}
Member.defaultProps = {
    name : "No info for now",
    title : "No info for now"
}
export default Member;
