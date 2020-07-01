import React from 'react';
import '../css/styles.css';
import Footer from './Footer';
import Iframe from 'react-iframe';

const Contact = () => {
    return (
        <section className="page-section bg-light">
            <h3 className="text-center section-heading text-uppercase">THIS IS CONTACT US PAGE</h3>
                <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6120.141958965037!2d32.79781952634139!3d39.91742774641664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zdG9iYiBldMO8!5e0!3m2!1str!2str!4v1593622037783!5m2!1str!2str"
                    width="600px"
                    height="350px"
                    id="myId"
                    className="ml-5"
                    display="initial"
                    position="relative"
                />
            <h2 className="float-right mr-6 mt-5">
                TEL: XXXX-XXX-XX-XX <br/><br/>
                FAX: XXXX-XXX-XX-XX
            </h2>
            <Footer/>
        </section>
    );
}
 
export default Contact;
