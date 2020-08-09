import React from 'react';
import '../css/styles.css';
import Project from './Project';
import FinancialMarketImg from '../assets/img/projects-image/financial-market.jpg';

 
const Projects = () => {
    return (
        <section className="page-section bg-light mt-4 pb-0" id="team">
            <h3 className="text-center bg-dark-2 text-light pt-4 pb-4 mt-0 mb-5 coloumn">PROJECTS</h3>
            <div className="container">
                <div className="text-left">
                    <h3 className="team-header mb-5">Principal Investigator</h3>
                </div>
                <Project
                    img={FinancialMarketImg}
                    name="A Multi-Agent Simulation and Backtesting Workbench Software for Deep Learning and Evolutionary Algorithm based Options Trading Strategy Optimization"
                    fundedby="The Scientific and Technological Council of Turkey, TUBITAK 1001 project"
                    budget="489.000 TL"
                    period="01/05/2016 - 01/05/2019"
                    scope="Analysis and optimization of different option strategies for various market conditions using deep learning and evolutionary computation methodologies"
                    team="Dr. A. Murat Özbayoğlu, Dr. Ekin Tokat, Mustafa Uçar, Uğur Şahin, Uğur Güdelek, Efe Arın, Kaan Kaya"
                    keywords="Deep Learning, financial markets, stock and option trading, multi-agent systems, evolutionary computation, options strategy optimization"
                />
                <Project 
                    name="ATM User Profiling and Menu Optimization"
                    fundedby="Ministry of Science, Industry and Technology SANTEZ project with PROVUS, A.S."
                    budget="125.960 TL"
                    period="01/03/2014 - 15/01/2016"
                    scope="Creating customized user ATM menus optimized for faster navigation. The aim is to minimize the number of clicks and/or the time spent for transaction processing"
                    team="Dr. A. Murat Özbayoğlu, Dr. Erdoğan Doğdu, Jeyhun Karimov, Erkan Akın"
                    keywords="Menu optimization, ETL, clustering, machine learning, evolutionary computation, computational intelligence, Hadoop Mapreduce, transaction forecasting"
                />
                <div className="text-left">
                    <h3 className="team-header mb-5">Researcher</h3>
                </div>
                <Project 
                    name="Development of Advanced Machining Monitoring and Prediction Algorithms using Deep Learning for Industry 4.0"
                    fundedby="The Scientific and Technological Council of Turkey, TUBITAK 1001 project"
                    budget="220.000 TL"
                    period="01/11/2018 - 01/11/2020"
                    scope="Developing deep learning based prediction models between process control and monitoring parameters and process consequaneces such as tool wear, tool breakage, and chatter for preventive maintenance"
                    team="1 Principal Investigator, 1 researcher, 1 PhD and 1 graduate student"
                    keywords="Deep Learning, advanced process monitoring, computational intelligence, tool condition monitoring, Industry 4.0"
                />
                <Project 
                    name="Establishing Crop Information System for Wheat Production to Sustain Food Security"
                    fundedby="The Scientific and Technological Council of Turkey, TUBITAK 3001 project"
                    budget="60.000 TL"
                    period="01/10/2015 - 01/10/2018"
                    scope="Analysis of wheat crop data using classical and machine learning techniques and provide a crop information system and database with a web interface"
                    team="1 Principal Investigator, 3 researchers, 1 graduate student"
                    keywords="Crop information system, computational intelligence, field yield estimation, GIS"
                />
                <Project 
                    name="ECOMANINDUSTRY"
                    fundedby="European Union FP7-LEAD-ERA Project"
                    budget="330.000 Euro"
                    period="01/04/2013 - 01/04/2016"
                    scope="36 month project to create a web based software for data collection and identfying clean production and industrial symbiosis potentials for companies"
                    team="3 international partners, 6 researchers, 2 programmers, 2 graduate students, Dr. Christoph Hugi, Dr. H. Özgür Ünver, Dr. A. Murat Özbayoğlu, Dr. Engin Kılıç, Dr. Guillaume Massard, Dirk Hengevoos, Tuna Gümüş, Çiğdem Tambağ, M. Zeynel Dağlı, Okan Çıran, Catherine Moser, Emily Vuylsteke"
                    keywords="Clean Production, Industrial Symbiosis, software development, database, GIS"
                />
                <Project 
                    name="A Virtual Factory Framework for SMEs"
                    fundedby="Ministry of Science, Industry and Technology SANTEZ project with OSTIM Teknoloji, A.S."
                    budget="660.000 TL"
                    period="01/04/2012 - 01/10/2015"
                    scope="36 month project for development of an Ontology based Multi-Agent Operational Virtual Factory Framework for Production High Value Added Products by SMEs"
                    team="Dr. H. Özgür Ünver, Dr. A. Murat Özbayoğlu, Dr. Engin Kılıç, Dr. Erdoğan Doğdu, Bahram Lotfi Sadigh, Shahrzad Nikghadam, Maria Moradnezhad"
                    keywords="Virtual Enterprise, ontology, multi-agent systems, partner selection, high value added products manufacturing"
                />
                <div className="text-left">
                    <h3 className="team-header mb-5">Consultant</h3>
                </div>
                <Project 
                    name="CyDecSys - Advanced Cybersecurity Decision Support System Development, STM Technology"
                    fundedby="The Scientific and Technological Council of Turkey, TUBITAK TEYDEB project with STM Technology"
                    budget="-"
                    period="01/10/2016 - 01/12/2017"
                    scope="Developing Machine Learning models for Cybersecurity problems and integrating the solutions into Decision Support System"
                    team="STM Technology Research Engineers and 2 consultants from TOBB ETU"
                    keywords="Machine Learning for Cybersecurity, Precondition, Postcondition Analysis, Vulnerability Classification"
                />
                <Project 
                    name="Big Data Analytics, STM Technology"
                    fundedby="STM Technology"
                    budget="-"
                    period="01/01/2015 - 01/01/2017"
                    scope="Technical consultancy in Big Data Analytics projects"
                    team="STM Technology Big Data Department Researchers and Engineers"
                    keywords="Traffic Flow Analysis, Social Network Analysis, Forecasting Models, Data Science"
                />
                <Project 
                    name="SEAS - Smart Energy Awareness System"
                    fundedby="European Union H2020 Project"
                    budget="3,5 Million Euro"
                    period="01/05/2014 - 01/05/2017"
                    scope="36 month project to develop a framework for smart grids for energy efficiency in producer-consumer networks and demonstrating the system on a micro-grid located in Ankara"
                    team="21 international partners, 3 consultants from TOBB ETU: Dr. Erdoğan Doğdu, Dr. Murat Özbayoğlu ve Dr. Nilgün Fesçioğlu Ünver"
                    keywords="Smart Grid, Energy Efficiency, ontology, pattern recognition"
                />
            </div>
        </section>
    );
}
 
export default Projects;