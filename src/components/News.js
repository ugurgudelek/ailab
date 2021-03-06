import React from 'react';
import '../css/styles.css';
import Report from './Report';
import { Link } from 'react-router-dom'


const News = () => {
    return (
        <section className="page-section bg-light" id="team">
            <div className="container">
                <h2>News</h2>
                <Report info="Lorem ipsum detur Lorem ipsum dol sit amet. adipisicing elit. Aspernatur, modi? lorem lorem lorem lorem lorem lorem"/>
                <Report info="Lorem ipsum detur Lorem ipsum dol sit amet. adipisicing elit. Aspernatur, modi? lorem lorem lorem lorem lorem lorem"/>
                <Report info="Lorem ipsum detur Lorem ipsum dol sit amet. adipisicing elit. Aspernatur, modi? lorem lorem lorem lorem lorem lorem"/>
                <Report info="Lorem ipsum detur Lorem ipsum dol sit amet. adipisicing elit. Aspernatur, modi? lorem lorem lorem lorem lorem lorem"/>
                <Link className="text-dark text-uppercase h5 non-under" to="/news"> <i class="fas fa-angle-double-right"></i> See all news</Link>
            </div>
        </section>
    );
}
 
export default News;
