import React from 'react';
import '../css/styles.css';
import Paper from './Paper';
import Pdf from './pdfs/sample.pdf';
 
const Publications = () => {
    return (
        <section className="page-section bg-light">
            <h3 className="text-center">THIS IS PUBLICATIONS PAGE</h3>
            <Paper name="Paper1" date="mm.dd.yy" link={Pdf}/>
            <Paper name="Paper2" date="mm.dd.yy" link={Pdf}/>
            <Paper name="Paper3" date="mm.dd.yy" link={Pdf}/>
            <Paper name="Paper4" date="mm.dd.yy" link={Pdf}/>
        </section>
    );
}

export default Publications;