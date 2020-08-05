import React from 'react';
import '../css/styles.css';
import Iframe from 'react-iframe';

const Contact = () => {
    return (
        <section className="page-section bg-light mt-4 pb-0" id="team">
            <h3 className="text-center bg-dark-2 text-light pt-4 pb-4 mt-0 mb-5">CONTACT US</h3>
            <h4 className="text-center text-uppercase text-secondary">You can found us here</h4>
            <h4 className="text-center text-secondary large"><i class="fas fa-long-arrow-alt-down"></i></h4>
            <Iframe
                url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12239.5900466651!2d32.7988233!3d39.9213097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf1bcdf3b364e3d8!2sTOBB%20University%20of%20Economics%20and%20Technology!5e0!3m2!1sen!2str!4v1596127040504!5m2!1sen!2str"
                width="400px"
                height="350px"
                id="myId"
                className="embed-responsive margin-auto"
                
            />
            <h4 className="text-center mb-4 text-secondary tel-fax">
                TEL: XXXX-XXX-XX-XX <br/><br/>
                FAX: XXXX-XXX-XX-XX
            </h4>
        </section>
    );
}
 
export default Contact;
