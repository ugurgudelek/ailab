import React from 'react';
import '../css/styles.css';

const Footer = () => {
    return (
        <div className="bg-gray">
            <div className="footer">
            <a className="btn btn-dark btn-social mx-2 float-left mt-5" href="https://twitter.com/tobbetum" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2 float-left mt-5" href="https://www.facebook.com/tobbetum/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2 float-left mt-5" href="https://www.youtube.com/channel/UCYvSYpykYQ4bszqa3YgL0VA" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                <h6 className="float-right footer text-dark mt-5 text-left pr-3">
                    Sogutozu Cad. No:43, Sogutozu, <br/>
                    Ankara, 06560 Turkey
                </h6>
            </div>
        </div>
    );
}
 
export default Footer;
