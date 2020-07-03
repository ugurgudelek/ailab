import React from 'react';
import '../css/styles.css';
import Footer from './Footer';

const HomePage = () => {
    return (
        <section>
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading text-dark">Welcome To Tobb ETU AI Lab!</div>
                    <div className="masthead-heading text-uppercase text-dark">It's Nice To Meet You</div>
                    <a className="btn btn-secondary btn-xl text-uppercase js-scroll-trigger" href="/About">Tell Me More</a>
                </div>
            </header>
            <Footer/>
        </section>
    );
}
 
export default HomePage;