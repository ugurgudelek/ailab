import React from 'react';
import '../css/styles.css';
import Footer from './Footer';
import Iframe from 'react-iframe';

const Contact = () => {
    return (
        <section className="page-section bg-light mt-4 pb-0">
            <h3 className="text-center bg-dark-2 text-light pt-4 pb-4 mt-0 mb-5">CONTACT US</h3>
            <h4 className="text-center text-uppercase text-secondary">You can found us here</h4>
            <h4 className="text-center text-secondary large"><i class="fas fa-long-arrow-alt-down"></i></h4>
            <Iframe
                url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6120.141958965037!2d32.79781952634139!3d39.91742774641664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zdG9iYiBldMO8!5e0!3m2!1str!2str!4v1593622037783!5m2!1str!2str"
                width="600px"
                height="350px"
                id="myId"
                className="embed-responsive"
                display="initial"
                position="relative"
            />
            <h2 className="text-center mb-4 text-secondary">
                TEL: XXXX-XXX-XX-XX <br/><br/>
                FAX: XXXX-XXX-XX-XX
            </h2>
        </section>
    );
}
 
export default Contact;
