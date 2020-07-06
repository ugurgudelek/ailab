import React from 'react';
import '../css/styles.css';
import Project from './Project';
 
const Projects = () => {
    return (
        <section className="page-section bg-light mt-4 pb-0">
            <h3 className="text-center bg-dark-2 text-light pt-4 pb-4 mt-0 mb-5">PROJECTS</h3>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </section>
    );
}
 
export default Projects;