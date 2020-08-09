import React from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom'

function Project (props) {
    return (
        <div className="">
            <div className="project-member">
                <Link to={props.link}><img src={props.img} alt=""/></Link>
                <h3 className="w-75-project project-name">{props.name}</h3>
                <p className="w-60-project">{props.sum}</p>
                <p className="w-60-project"><b>Funded by: </b>{props.fundedby}</p>
                <p className="w-60-project"><b>Budget: </b>{props.budget}</p>
                <p className="w-60-project"><b>Period: </b>{props.period}</p>
                <p className="w-60-project"><b>Scope: </b>{props.scope}</p>
                <p className="w-60-project"><b>Team: </b>{props.team}</p>
                <p className="w-60-project"><b>Keywords: </b>{props.keywords}</p>
            </div>
        </div>
    );
}
Project.defaultProps = {
    name : "Project's name!!",
    fundedby : "lorem",
    budget : "lorem",
    period : "lorem",
    scope : "lorem",
    team : "lorem",
    keywords : "lorem",
    date : "mm.dd.yy",
}
export default Project;
