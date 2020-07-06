import React from 'react';
import '../css/styles.css';
import Footer from './Footer';
import Project from './Project';
 
const Projects = () => {
    return (
        <section className="page-section bg-light mt-5">
            <h3 className="text-center">PROJECTS</h3>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Footer/>
        </section>
    );
}
 
export default Projects;