import React from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom'

function Project (props) {
    return (
        <div className="col-12">
            <div className="project-member">
                <Link to={props.link}><img src="https://picsum.photos/400/300" alt=""/></Link>
                <h3 className="w-25-project">{props.name} Lorem ipsum dolor sit amet. </h3>
                <h6><span>Posted on</span> {props.date}</h6>
                <p className="text-dark w-50-project">{props.sum} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt delectus odio fugit incidunt eveniet quia sapiente. Doloremque vel temporibus perferendis...</p>
                <Link className="btn btn-info">Read More!</Link>
            </div>
        </div>
    );
}
Project.defaultProps = {
    name : "Project's name!!",
    sum : "Summary!!",
    date : "mm.dd.yy",
    link : "#!"
}
export default Project;
