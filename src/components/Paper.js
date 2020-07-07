import React from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom'
 
const Paper = (props) => {
    return (
        <div className="card bg-light">
            <header className="card-header bg-secondary large-1"><Link className="text-white btn-link" to="#!">{props.name}!! Lorem ipsum dolor sit amet. </Link></header>
            <div className="card-body">Writers-Writers-Writers-Writers-Writers-Writers-Writers-Writers
                <a target="_blank" rel="noopener noreferrer" href={props.link}><i class="fas fa-download float-right text-dark btn-link display-5"></i></a>
            </div>
            <div className="card-body">{props.date}</div>
            <div className="card-body bg-gray">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui adipisci reprehenderit, nihil sunt atque explicabo iure quaerat tenetur, nemo molestiae repudiandae consequatur quod voluptatem architecto, id facilis! Magnam, nihil in.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci cumque, numquam ipsam eius inventore illum non laudantium sed ab doloribus quos voluptas ipsa esse fuga quae, facere accusantium facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officiis nemo. Magni quidem quod neque eius dolorum nobis. Minima exercitationem illum explicabo necessitatibus consectetur quibusdam sunt cum ratione eaque rem!</div>
        </div>
    );
}
 
export default Paper;