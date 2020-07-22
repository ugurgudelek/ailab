import React from 'react';
import '../css/styles.css';
import News from './News';
import Profs from './Professors';
import PublicationsHome from './PublicationsHome';


const Home = () => {
    return (
        <section>
            <header className="masthead" id="home">
                <div className="container">
                    <div className="masthead-subheading text-dark">Welcome To Tobb ETU AI Lab!</div>
                    <div className="masthead-heading text-uppercase text-dark">It's Nice To Meet You</div>
                    <a className="btn btn-dark btn-xl text-uppercase js-scroll-trigger" href="/About">Tell Me More</a>
                </div>
            </header>
            <News />
            <Profs />
            <PublicationsHome/>
        </section>
    );
}
 
export default Home;