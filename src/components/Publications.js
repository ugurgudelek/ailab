import React from 'react';
import '../css/styles.css';
import Paper from './Paper';
import Pdf from './pdfs/sample.pdf';
import Footer from './Footer';
 
const Publications = () => {
    return (
        <section className="page-section bg-light mt-5">
            <h3 className="section-heading text-uppercase text-center mb-5">PUBLICATIONS</h3>
            <Paper name="Paper1" date="mm.dd.yy" link={Pdf}/>
            <Paper name="Paper2" date="mm.dd.yy" link={Pdf}/>
            <Paper name="Paper3" date="mm.dd.yy" link={Pdf}/>
            <Paper name="Paper4" date="mm.dd.yy" link={Pdf}/>
            <Footer/>
        </section>
    );
}

export default Publications;