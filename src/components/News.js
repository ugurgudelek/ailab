import React from 'react';
import '../css/styles.css';
import Report from './Report';
import { Link } from 'react-router-dom'


const News = () => {
    return (
        <section className="page-section bg-light" id="team">
            <div class="container">
                <h2>News</h2>
                <Report/>
                <Report/>
                <Report/>
                <Report/>
                <Link className="text-dark text-uppercase h5 non-under" to="/News"> <i class="fas fa-angle-double-right"></i> See all news</Link>
            </div>
        </section>
    );
}
 
export default News;
