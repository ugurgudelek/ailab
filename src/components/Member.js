import React from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom'
import defaultImg from '../assets/img/team/avatar_male.png';

function Member (props) {
    return (
        <div className="col-lg-3">
            <div className="team-member">
                <Link to={props.link}><img className="mx-auto rounded-circle" src={props.img} alt=""/></Link>
                <Link className="text-dark non-under" to={props.link}><h5>{props.name}</h5></Link>
                <p className="text-dark">{props.title}</p>
                <a target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-social mx-2" href={props.twitter}><i className="fab fa-twitter"></i></a><a target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-social mx-2" href={props.facebook}><i className="fab fa-facebook-f"></i></a><a target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-social mx-2" href={props.linkedin}><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    );
}
Member.defaultProps = {
    name : "No info for now",
    title : "No info for now",
    link : "#!",
    img : defaultImg,
    twitter : "#!",
    facebook : "#!",
    linkedin : "#!"
}
export default Member;
