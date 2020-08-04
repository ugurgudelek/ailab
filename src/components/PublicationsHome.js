import React from 'react';
import '../css/styles.css';
import PaperHome from './PaperHome';
import { Link } from 'react-router-dom'


const PublicationsHome = () => {
    return (
        <section className="page-section bg-light pb-0" id="team">
            <div class="container mb-5">
                <h2>Publications</h2>
                <PaperHome info="Implementation of Neuro-inspired Arithmetic and Logic Circuits by Using Josephson Junction Based Artificial Neurons"/>
                <PaperHome info="Review of tool condition monitoring of machining processes and opportunities for new trends in deep learning"/>
                <PaperHome info="Financial Forecasting using Deep Learning with an optimized trading strategy"/>
                <PaperHome info="Integrated energy-efficient machining of rotary impellers and multi-objective optimization"/>
                <Link className="text-dark text-uppercase h5 non-under" to="/Publications"> <i class="fas fa-angle-double-right"></i> See all papers</Link>
            </div>
        </section>
    );
}

export default PublicationsHome;
