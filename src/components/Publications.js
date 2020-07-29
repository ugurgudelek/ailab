import React from 'react';
import '../css/styles.css';
import Paper from './Paper';
import Pdf from './pdfs/sample.pdf';
import PdfPrev from '../assets/img/pdf_preview/pdfsample.png';
import PdfPrev2 from '../assets/img/pdf_preview/pdfsample2.png';
 
const Publications = () => {
    return (
        <section className="page-section bg-dark mt-4 pb-0" id="team">
            <h3 className="text-center bg-dark-2 text-light pt-4 pb-4 mt-0 mb-5">PUBLICATIONS</h3>
            <Paper 
                name="Implementation of Neuro-inspired Arithmetic and Logic Circuits by Using Josephson Junction Based Artificial Neurons"
                writers = "Altay Karamüftüoğlu, Ali Bozbey, Murat Özbayoğlu"
                date="IEEE International Superconductive Electronics Conference, ISEC 2019, July 28, August 1, Riverside, CA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Review of tool condition monitoring of machining processes and opportunities for new trends in deep learning" 
                writers="G. Serin, B. Sener, A.M. Ozbayoglu, H.O. Unver" 
                date="FAIM 2019 - 29th International Conference on Flexible Automation and Intelligent Manufacturing, 24-28 June, 2019, University of Limerick, Ireland." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Financial Forecasting using Deep Learning with an optimized trading strategy" 
                writers="A. Maratkhan, I. Ilyassov, M. Aitzhanov, M.F. Demirci, A.M. Ozbayoglu"
                date="IEEE Congress on Evolutionary Computation, CEC 2019, 10-13 June 2019, Wellington, New Zealand." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Integrated energy-efficient machining of rotary impellers and multi-objective optimization" 
                writers="G. Serin, B. Sener, A.M. Ozbayoglu, H.O. Unver"
                date="Materials and Manufacturing Processes, pp. 1-13, DOI: 10.1080/10426914.2019.1605177" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Menu Optimization for Multi-Profile Customer Systems on Large Scale Data" 
                writers="Jeyhun Karimov, Murat Ozbayoglu, Bulent Tavli"
                date="Informatica, revision requested" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Automated Image Analysis and Contiguity Estimation for Liquid Phase Sintered Tungsten Heavy Alloys" 
                writers="A. Murat Ozbayoglu, Nuri Durlu, N. Kaan Caliskan"
                date="arXiv preprint, arXiv:1902.05382" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Financial Trading Model with Stock Bar Image Time Series with Deep Convolutional Neural Networks" 
                writers="Ömer Berat Sezer, A. Murat Ozbayoglu"
                date="Intelligent Automation and Soft Computing, in press" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Neural Network based Instant Parameter Prediction for Wireless Sensor Network Optimization Models" 
                writers="Murat Ozbayoglu, Ayhan Akbas, Huseyin Ugur Yildiz, Bulent Tavli"
                date="Wireless Networks, pp. 1-14" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Computational Intelligence Models for PIV based Particle (Cuttings) Direction and Velocity Estimation in Multi-Phase Flows" 
                writers="Hatice Tombul, Murat Ozbayoglu, Evren Ozbayoglu"
                date="Journal of Petroleum Science & Engineering, vol 172, Jan 2019, pp. 547-558" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="MIS-IoT: Modular Intelligent Server Based Internet of Things Framework with Big Data and Machine Learning" 
                writers="A.C. Onal, O.B. Sezer, M. Ozbayoglu, E. Dogdu"
                date="IEEE International Conference on Big Data, 2018, pp. 2270-2279, 10-13 December 2018, Seattle, WA, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Anomaly Detection in Vehicle Traffic with Image Processing and Machine Learning" 
                writers="Selim Sefa Sarikan, Murat Ozbayoglu"
                date="Complex Adaptive Systems 2018, Procedia Computer Science, vol 140, pp. 64-69, 5-7 November 2018, Chicago, USA" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Optimized GPU Implementation of JPEG 2000 for Satellite Image Decompression" 
                writers="Dervis Utku Ufuk, Alptekin Temizel, Ahmet Murat Ozbayoglu"
                date="CSE 2018, 21st IEEE International Conference on Computational Science and Enginerering, pp. 56-61, 29-31 October 2018, Bucharest, Romania" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Classification of Turkish Documents using Paragraph Vector" 
                writers="Mustafa Sari, Murat Ozbayoglu"
                date="International Conference on Artificial Intelligence and Data Processing 18, 27-28 Sept 2018, Malatya, Turkey" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Perceptions, Expectations and Implementations of Big Data in Public Sector" 
                writers="Erdogan Dogdu, Murat Ozbayoglu, Ali Yazici, Ziya Karakaya"
                date="UBMK'18, International Conference on Computer Engineering, pp. 615-620, 20-23 September 2018, Sarajevo, Bosnia-Herzegovina" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Load and PV Generation Forecast Based Cost Optimization for Nanogrids with PV and Battery" 
                writers="Ugur Gudelek, Cem Cirak, Efe Arin, Erdem Sezgin, Murat Ozbayoglu and Murat Gol"
                date="2018 53rd International Universities Power Engineering Conference (UPEC), 4-7 September 2018, Glasgow, Scotland" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Predicting the pressure losses while the drillstring is buckled and rotating using artificial intelligence methods" 
                writers="Evren Ozbayoglu, Oney Erge, Murat Ozbayoglu"
                date="Journal of Natural Gas Science & Engineering, volume 56, August 2018, pp. 72-80" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Algorithmic Financial Trading with Deep Convolutional Neural Networks: Time Series to Image Conversion Approach" 
                writers="Ömer Berat Sezer, A. Murat Ozbayoglu"
                date="Applied Soft Computing, volume 70, September 2018, pp. 525-538" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Satellite Image Band Registration with Dynamic Time Warping and Discrete Wavelet Transform" 
                writers="D. Utku Ufuk, Ibrahim S. Acikgoz, Mustafa Teke , A. Murat Ozbayoglu"
                date="IEEE Conference on Signal Processing and Communications Applications (SIU 2018), 2-5 May, Cesme, Izmir, Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Deep Convolutional Autoencoder for Radar-Based Classification of Similar Aided and Unaided Human Activities" 
                writers="M.S. Seyfioğlu, A.M. Ozbayoglu, S.Z. Gürbüz"
                date="IEEE Transactions on Aerospace and Electronic Systems, volume 54, Issue 4, August 2018, pp. 1709-1723" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Automated Generation of Attack Graphs Using NVD" 
                writers="M. Ugur Aksu, Kemal Bicakci, M. Hadi Dilek, A. Murat Ozbayoglu"
                date="CODASPY '18, The 8th ACM Conference on Data and Application Security and Privacy, pp. 135-142, 19-21 March, Tempe, AZ, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Context Aware Computing, Learning and Big Data in Internet of Things: A Survey" 
                writers="Ömer Berat Sezer, Erdoğan Doğdu, A. Murat Ozbayoglu"
                date="IEEE Internet of Things Journal, volume 5, Issue 1, February 2018, pp. 1-27" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Automated Image Matching and New Readings for Cyrus the Great's 547 BC Campaign in the Nabonidus Chronicle (BM 35382 = ABC 7)." 
                writers="Adalı, S.F., Demirci, M.F., Özbayoğlu, A.M."
                date="Die Welt des Orients, vol 47, No:2, pp. 153-185." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Weather Data Analysis and Sensor Fault Detection using an Extended IoT Framework with Semantics, Big Data, and Machine Learning" 
                writers="A.C. Onal, O.B. Sezer, M. Ozbayoglu, E. Dogdu"
                date="IEEE International Conference on Big Data, 2017, 13-15 December, Boston, MA, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimation of Parameters for the Free-Form Machining with Deep Neural Net" 
                writers="G. Serin, U. Güdelek, A.M. Özbayoğlu, H.Ö. Ünver"
                date="IEEE International Conference on Big Data, 2017, 13-15 December, Boston, MA, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A Deep Learning based Stock Trading Model with 2-D CNN Trend Detection" 
                writers="M.U. Güdelek, S.A. Bölük, A.M. Özbayoğlu"
                date="IEEE Computational Intelligence in Financial Engineering (IEEE CIFEr 2017) in IEEE Symposium Series on Computational Intelligence (IEEE SSCI 2017), Honolulu, HI, USA, 27 November-1 December, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Quora Duplicate Query Elimination" 
                writers="Efe Arın, Uğur Gudelek, Murat Özbayoğlu"
                date="LTC '17, 8th Language and Technology Conference, 17-19 November, Poznan, Poland, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="An artificial neural network based power prediction model for rough cutting of AISI 304" 
                writers="G. Serin, M. Kahya, A.M. Özbayoğlu, H.Ö. Ünver"
                date="8th International Symposium on Machining, 2-4 November, Antalya, Turkey, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Investigation of rough milling of Ti6A14V using response surface methodology" 
                writers="M. Kahya, G. Serin, A.M. Özbayoğlu, H.Ö. Ünver"
                date="8th International Symposium on Machining, 2-4 November, Antalya, Turkey, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A Deep Neural-Network Based Stock Trading System Based on Evolutionary Optimized Technical Analysis Parameters" 
                writers="O.B. Sezer, M. Ozbayoglu, E. Dogdu"
                date="Procedia - Computer Sciences - Complex Adaptive Systems, vol 114, pp. 473-480, 30 October-1 November, Chicago, IL, USA, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Automated Vehicle Classification with Image Processing and Computational Intelligence" 
                writers="S.S. Sarikan, A.M. Ozbayoglu, O. Zilci"
                date="Procedia - Computer Sciences - Complex Adaptive Systems, vol 114, pp. 515-522, 30 October-1 November, Chicago, IL, USA, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Feature diverse hierarchical classification of human gait with CW radar for assisted living" 
                writers="Mehmet Saygın Seyfioğlu, A. Serinoz, Ahmet Murat Özbayoğlu, Sevgi Zübeyde Gürbüz"
                date="International Conference on Radar Systems (Radar 2017), 23-26 October. Belfast, UK, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Development of Superconductor Integrated Logic Circuit Design with Artificial Neural Network Structure" 
                writers="Altay Karamüftüoğlu, Ali Bozbey, Murat Özbayoğlu"
                date="International Conference on Condensed Matter and Materials Science, 11-15 October, Adana, Turkey, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Big and Open Data Analytics with Deep Learning, pp. 115-130" 
                writers="Özbayoğlu, A.M."
                date="In: Big Data and Open Data Analytics: Methods and Applications, Editors: Şeref Sağıroğlu, Orhan Koç, Grafiker Publishing, ISBN: 978-605-9247-59-7, October 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Deep learning of micro-Doppler features for aided and unaided gait recognition" 
                writers="Mehmet Saygın Seyfioğlu, Sevgi Zübeyde Gürbüz, Ahmet Murat Özbayoğlu, Melda Yüksel"
                date="IEEE 2017 Radar Conference, pp. 1125-1130. 8-12 May. Seattle, WA, USA, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="An Artificial Neural Network-based Stock Trading System Using Technical Analysis and Big Data Framework" 
                writers="O.B. Sezer, M. Ozbayoglu, E. Dogdu"
                date="ACM Southeast Conference, ACMSE 2017, 13-15 April, Kennesaw State University, GA, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="An ontology-based multi-agent virtual enterprise system (OMAVE): part 2: partner selection" 
                writers="Bahram Lotfi Sadigh, Shahrzad Nikghadam, A. Murat Ozbayoglu, Hakki Ozgur Unver, Erdogan Dogdu and S. Engin Kilic"
                date="International Journal of Computer Integrated Manufacturing, 31 January 2017" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="An Extended IoT Framework with Semantics, Big Data, and Analytics" 
                writers="O.B. Sezer, E. Dogdu, M. Ozbayoglu, A.C. Onal"
                date="IEEE International Conference on Big Data, 2016, pp.1849-1856. 5-8 December. Washington, DC, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A Real-Time Autonomous Highway Accident Detection Model Based on Big Data Processing and Computational Intelligence" 
                writers="M. Ozbayoglu, G. Küçükayan, E. Doğdu"
                date="IEEE International Conference on Big Data, 2016, pp. 1807-1813. 5-8 December. Washington, DC, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A Survey on Semantic Web and Big Data Technologies for Social Network Analysis" 
                writers="S. Kulcu, E. Doğdu, M. Ozbayoglu"
                date="IEEE International Conference on Big Data, 2016, pp.1768-1777. 5-8 December. Washington, DC, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A Structurally Enhanced Fuzzy Inference System Partner Selection Technique In Forming Virtual Enterprise" 
                writers="S. Nikghadam, H.O. Unver, A.M. Ozbayoglu, S.E. Kilic"
                date="INFORMS 2016, 13-16 November, Nashville, TN, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="" 
                writers=""
                date="" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            
        </section>
    );
}

export default Publications;