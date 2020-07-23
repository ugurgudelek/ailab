import React from 'react';
import '../css/styles.css';
import PaperHome from './PaperHome';
import { Link } from 'react-router-dom'


const PublicationsHome = () => {
    return (
        <section className="page-section bg-light pb-0" id="team">
            <div class="container mb-5">
                <h2>Publications</h2>
                <PaperHome/>
                <PaperHome/>
                <PaperHome/>
                <PaperHome/>
                <Link className="text-dark text-uppercase h5 non-under" to="/Publications"> <i class="fas fa-angle-double-right"></i> See all papers</Link>
            </div>
        </section>
    );
}

export default PublicationsHome;
