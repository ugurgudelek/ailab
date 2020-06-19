import React from 'react';
import '../css/styles.css';

const Home = () => {
    return (
       <div>
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading black">Welcome To Tobb ETU AI Lab!</div>
                <div className="masthead-heading text-uppercase black">It's Nice To Meet You</div>
                <a className="btn btn-secondary btn-xl text-uppercase js-scroll-trigger" href="/About">Tell Me More</a>
            </div>
        </header>
       </div>
    );
}
 
export default Home;