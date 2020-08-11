import React from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom'
 
const Paper = (props) => {
    return (
        <div className="card bg-light border-0 m-5">
            <header className="card-header bg-paper medium-2 bl-1"><Link className="text-white btn-link" to="#!">{props.name}</Link></header>
            <div className="card-body medium-1">{props.writers}
                <a target="_blank" rel="noopener noreferrer" href={props.link}><i class="fas fa-download float-right text-dark btn-link display-5"></i></a>
            </div>
            <div className="card-body">{props.date}</div>
            <div className="row mb-3">
                <img className="w-20-paper center border" src={props.pdflink} alt=""/>
                <img className="w-20-paper center border" src={props.pdflink2} alt=""/>
                <img className="w-20-paper center border" src={props.pdflink3} alt=""/>
                <img className="w-20-paper center border" src={props.pdflink4} alt=""/>
            </div>
            <div className="card-body bg-paper-bottom">{props.abstract}</div>
        </div>
    );
}
export default Paper;