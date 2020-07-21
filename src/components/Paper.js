import React from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom'
 
const Paper = (props) => {
    return (
        <div className="card bg-light border-0 m-5">
            <header className="card-header bg-secondary medium-2 bl-1"><Link className="text-white btn-link" to="#!">{props.name}</Link></header>
            <div className="card-body medium-1">{props.writers}
                <a target="_blank" rel="noopener noreferrer" href={props.link}><i class="fas fa-download float-right text-dark btn-link display-5"></i></a>
            </div>
            <div className="card-body">{props.date}</div>
            <div className="row mb-3">
                <img className="w-20 center border height-1" src={props.pdflink2} alt=""/>
                <img className="w-20 center border height-1" src={props.pdflink3} alt=""/>
                <img className="w-20 center border height-1" src={props.pdflink4} alt=""/>
                <img className="w-20 center border height-1" src={props.pdflink} alt=""/>
            </div>
            <div className="card-body bg-gray">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui adipisci reprehenderit, nihil sunt atque explicabo iure quaerat tenetur, nemo molestiae repudiandae consequatur quod voluptatem architecto, id facilis! Magnam, nihil in.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci cumque, numquam ipsam eius inventore illum non laudantium sed ab doloribus quos voluptas ipsa esse fuga quae, facere accusantium facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officiis nemo. Magni quidem quod neque eius dolorum nobis. Minima exercitationem illum explicabo necessitatibus consectetur quibusdam sunt cum ratione eaque rem!</div>
        </div>
    );
}
export default Paper;