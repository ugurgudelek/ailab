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
                name="Design of a Customer's Type Based Algorithm for Partner Selection Problem of Virtual Enterprise" 
                writers="S. Nikghadam, A.M. Ozbayoglu, H.O. Unver, S.E. Kilic"
                date="Procedia - Computer Sciences - Complex Adaptive Systems, Vol. 95, pp.467-474. 2-4 November. Los Angeles, CA, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Yapay Sinir Ağları ile Kullanıcı Profilleme ve Konfor Seviyesi Tahmini." 
                writers="Güneş, U., Elbir, Ö., Özbayoğlu, A.M."
                date="International Artificial Intelligence and Data Processing Symposium (IDAP- 16), pp. 413-418, İnönü University, Malatya, Türkiye, 17-18 September, 2016." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Opinion Mining of Microblog Texts on Hadoop Ecosystem." 
                writers="M. Akif, Agca, Senol Atac, M. Mert Yucesan, Gokhan Y. Kucukayan, A. Murat Özbayoglu and Erdogan Dogdu."
                date="International Journal of Cloud Computing, vol 5, No:1-2, pp. 79-90." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Rastlantısal Su¨rec¸ ve Genetik Algoritmalar ile Algoritmik Kompozisyon." 
                writers="Özbayoğlu, A.M., Yavuz, M.H."
                date="International Conference on Mathematics and Mathematics Education (ICMME-2016), Fırat University, Elazığ, Turkey, 12-14 May, 2016." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="An ontology-based multi-agent virtual enterprise system (OMAVE): part 1: domain modelling and rule management" 
                writers="Bahram Lotfi Sadigh, Hakki Ozgur Unver, Shahrzad Nikghadam, Erdogan Dogdu, A. Murat Ozbayoglu and S. Engin Kilic"
                date="International Journal of Computer Integrated Manufacturing, 19 Feb 2016" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Evaluation of Partner Companies based on Fuzzy Inference System for Establishing Virtual Enterprise Consortium" 
                writers="Nikghadam, S., B. Lotfi Sadigh, Ozbayoglu, A. M, Unver, H. O. and Kilic. S. E."
                date="Lecture Notes in Computer Science – CCIS Communications in Computer Science vol 577, pp. 104-115, 15 Dec 2015." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimation of the Number of Participants in Government Tenders with Computational Intelligence" 
                writers="Y.S. Demiray, A.M. Ozbayoglu, B.K.O. Tas"
                date="3rd Workshop on Social and Algorithmic Issues in Business Support (SAIBS), 2015, pp.433-437. 27-29 November. Poznan, Poland." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A survey of partner selection methodologies for virtual enterprises and development of a goal programming– based approach" 
                writers="S. Nikghadam, B.Lotfi Sadigh, A.M. Özbayoğlu, H.Ö. Ünver and S. E. Kılıç"
                date="International Journal of Advanced Manufacturing Technology, pp. 1-22, 12 Nov 2015" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Clustering Quality Improvement of K-means Using a Hybrid Evolutionary Model" 
                writers="J. Karimov, M. Ozbayoglu"
                date="Procedia - Computer Sciences - Complex Adaptive Systems, Vol. 61, pp.38-45. 2-4 November. San Jose, CA, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="High quality clustering of big data and solving empty-clustering problem with an evolutionary hybrid algorithm" 
                writers="J. Karimov, M. Ozbayoglu"
                date="IEEE International Conference on Big Data, 2015, 29 October-1 November. Santa Clara, CA, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Generic Menu Optimization for Multi-profile Customer Systems" 
                writers="J. Karimov, M. Ozbayoglu, E. Dogdu and B.Tavlı"
                date="IEEE International Symposium on Systems Engineering (ISSE) 2015, pp. 163-169. 28-30 September. Rome, Italy." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="k-means Performance Improvements with Centroid Calculation Heuristics both for Serial and Parallel environments." 
                writers="Karimov, J., M. Ozbayoglu, and E. Dogdu."
                date="2015 IEEE Big Data Congress. 27 June-2 July. New York, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Partner selection in formation of virtual enterprises using fuzzy logic." 
                writers="Nikghadam, S., B.Lotfi Sadigh, Ozbayoglu, A. M., H. O. Unver, and S. E. Kilic."
                date="International Conference on Operations Research and Enterprise Systems, ICORES 2015, 10-12 January 2015, Lisbon, Portugal, pp. 82– 88." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A new model to determine the two phase drilling Fluid Behaviors through Horizontal Eccentric Annular Geometry, Part A: Flow Pattern Identification and Liquid Holdup Estimation." 
                writers="Osgouei, R.E., Özbayoglu, E., Özbayoglu, M. and Yüksel, E."
                date="Energy Sources, Part A: Recovery, Utilization, and Environmental Effects, Volume 37, Issue 15, pp. 1663-1673" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A new model to determine the two phase drilling Fluid Behaviors through Horizontal Eccentric Annular Geometry, Part B: Frictional Pressure Losses Estimation." 
                writers="Osgouei, R.E., Özbayoglu, E., Özbayoglu, M. and Yüksel. E."
                date="Energy Sources, Part A: Recovery, Utilization, and Environmental Effects, Volume 37, Issue 16, pp. 1756-1765" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Pressure drop estimation in horizontal annuli for liquid–gas 2 phase flow: Comparison of mechanistic models and computational intelligence techniques." 
                writers="Osgouei, Reza Ettehadi, Ozbayoglu, A. Murat, Ozbayoglu Evren M., Yuksel Ertan, Eresen, Aydin."
                date="Computers & Fluids 112, pp. 108-115" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Support Vector Regression and Computational Fluid Dynamics Modeling of Newtonian and Non-Newtonian Fluids in Annulus With Pipe Rotation." 
                writers="Sorgun, Mehmet, Ozbayoglu, A Murat, and Ozbayoglu M Evren."
                date="Journal of Energy Resources Technology 137.3, p. 032901." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Developing a Two Level Options Trading Strategy Based on Option Pair Optimization of Spread Strategies with Evolutionary Algorithms." 
                writers="Ucar, I., Ozbayoglu, M., and M. Ucar."
                date="IEEE Congress on Evolutionary Computation, CEC 2015. May 25-28. Sendai, Japan." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Finansal Islemler için Evrimsel Hesaplamalar yoluyla Egilimden Arındırılmıs Bagıl Güç Endeksi Göstergesi." 
                writers="Sahin, Ugur and Özbayoglu, A.Murat."
                date="MATDER, 14. Matematik Sempozyumu, 14-16 Mayıs, Nigde, Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Ontology-based Data Modelling and Decision Support in Smart Grid Applications." 
                writers="Dogdu, Erdogan, A. Murat Özbayoglu, Okan Benli, Hülya Erdener Akınç, Erdeniz Erol, Tugrul Atasoy, Ozan Gurec, and Özden Erçin."
                date="Proc. of the 2014 IEEE International Conference on Intelligent Energy and Power Systems. IEEE. June 2-6, 2014, Kyiv, Ukraine." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Conceptualization of a Web-based Software Platform that enables Clean Production and Industrial Symbiosis." 
                writers="Gumus, Tuna, Hugi Christoph, Dirk Hengevoss, Engin Kılıç, Guillaume Massard, Özbayoglu, Murat, and Ozgur Unver."
                date="16th International Conference on Machine Design and Production, UMTIK 2014, Izmir, Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Why the Names? Anubanini and His Clan in the Cuthaean Legend." 
                writers="Selim F. Adalı, M. Fatih Demirci, A. Murat Özbayoglu and Oguz Ergin."
                date="Journal of the Ancient History and Cultures of the Eastern Mediterranean vol. 11, pp. 15–29." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A Multi-agent System Model for Partner Selection Process in Virtual Enterprise." 
                writers="Sadigh, B Lotfi, F Arikan, Ozbayoglu, AM, HO Unver, and SE Kilic."
                date="Procedia Computer Science, Complex Adaptive Systems, CAS 2014. Vol. 36, pp. 367–372." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="TN-RSI: Trend-normalized RSI Indicator for Stock Trading Systems with Evolutionary Computation." 
                writers="Sahin, Ugur and Ozbayoglu, A Murat."
                date="Procedia Computer Science, Complex Adaptive Systems, CAS 2014. Vol. 36, pp. 240–245." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Three phase flow characteristics in Inclined Eccentric Annuli." 
                writers="Osgouei, R.E., M.E. Özbayoglu, Özbayoglu, A.M, and T. Eren."
                date="2013 IADC/SPE Drilling Technology Conference and Exhibition (MEDT), Dubai, UAE." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Towards the Automated Autograph and the Recognition of Cuneiform Signs: Preliminary Results 2013. Law and (Dis)order in the Ancient Near East" 
                writers="Selim F., Adali, M. Fatih Demirci, A. Murat Özbayoglu, and Mustafa Uçar."
                date="59th Rencontre Assyriologique Internationale, July 15- 19, Ghent University" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Comparison of Classifiers for Chatter Detection." 
                writers="Tugçi, R., B. Çelen, and Özbayoglu, A.M."
                date="IEEE Sinyal Isleme ve Iletisim Uygulamaları Konferansı (SIU 2013)." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="The Determination of Two Phase Liquid-Gas Flow Behavior Through Horizontal Eccentric Annular Geometry by Modification of Beggs & Brill and Lockhart & Martinelli Models." 
                writers="Osgouei, Reza Ettehadi, Mehmet Evren Ozbayoglu, Ozbayoglu, Murat, and Ertan H Yuksel."
                date="ASME 2013 Fluids Engineering Division Summer Meeting. American Society of Mechanical Engineers, V01CT17A008–V01CT17A008." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A Two-Stage Water-Gas Shift Reactor Model To Obtain Desired Synthesis Gas Characteristics With Adjustable Reactor Parameters." 
                writers="AM Ozbayoglu, C Kasnakoglu, A Gungor, A Biyikoglu, and BZ Uysal."
                date="Journal of The Faculty of Engineering And Architecture of Gazi University 28.2, pp. 339-351." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Gas-Liquid Flow Through Horizontal Eccentric Annuli: CFD and Experiments Compared" 
                writers="Sorgun, Mehmet, Osgouei, Reza E, Ozbayoglu, M Evren and Ozbayoglu, A Murat."
                date="Energy Sources, Part A: Recovery, Utilization, and Environmental Effects 35.10, pp. 891-899." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A Two-Level Cascade Evolutionary Computation Based Covered Call Trading Model." 
                writers="Ucar, Mustafa, Ilknur Bayram, and Ozbayoglu, A Murat."
                date="Procedia Computer Science, Complex Adaptive Systems Conference. ASME." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Note and Timbre Classification by Local Features of Spectrogram." 
                writers="Guven, Erhan and Ozbayoglu, A Murat."
                date="Procedia Computer Science, Complex Adaptive Systems, CAS 2012. Vol. 12. Elsevier, pp. 182–187." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimation of the Burned Area in Forest Fires Using Computational Intelligence Techniques." 
                writers="Özbayoglu, A Murat and Recep Bozer."
                date="Procedia Computer Science, Complex Adaptive Systems, CAS 2012. Vol. 12, pp. 282–287." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Comparison of Gross Calorific Value Estimation of Turkish Coals using Regression and Neural Networks Techniques." 
                writers="Ozbayoglu, A.Murat, M.Evren Ozbayoglu, and Gulhan Ozbayoglu."
                date="XXVIth International Mineral Processing Congress (IMPC 2012)." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A parametric study on coal gasification for the production of syngas" 
                writers="Gungor, Afsin, Ozbayoglu, Murat, Kasnakoglu, Cosku, Biyikoglu, Atilla and Uysal, Bekir Zuhtu."
                date="Chemical Papers 66.7,pp. 677-683." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Analysis of gas–liquid behavior in eccentric horizontal annuli with image processing and artificial intelligence techniques." 
                writers="Ozbayoglu, A Murat and Yuksel, H Ertan."
                date="Journal of Petroleum Science and Engineering 81.1, pp. 31-40." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Hole Cleaning Performance of Gasified Drilling Fluids in Horizontal Well Sections." 
                writers="Ozbayoglu, Mehmet, Osgouei, Reza, Ozbayoglu, Murat, and Yuksel, Ertan."
                date="SPE Journal 17.3, pp. 912-923." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Regression Techniques and Neural Network for the Estimation of Gross Calorific Value of Turkish Coals." 
                writers="Ozbayoglu, A.Murat, M.Evren Ozbayoglu, and Gulhan Ozbayoglu."
                date="XIIth International Mineral Processing Symposium, September 24-27. New Delhi, India, pp. 1175–1180." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimation of Frictional Pressure Losses in Annulus with Pipe Rotation Using Neural Networks and Computational Fluid Dynamics." 
                writers="Sorgun, Mehmet, Ozbayoglu, Murat, and Evren Ozbayoglu."
                date="10th International Conference on Advances in Civil Engineering, ACE 2012, Ankara, Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Hierarchical rule-based neural network for multiobject classification using invariant features." 
                writers="Imamoglu, N, A Eresen, and Ozbayoglu, AM."
                date="Innovations in Intelligent Systems and Applications (INISTA), 2011 International Symposium on. IEEE, pp. 296–299." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Gas-Liquid Flow Through Horizontal Eccentric Annuli: CFD and Experiments Compared." 
                writers="Mehmet, Sorgun, Ozbayoglu, A.Murat, and Ozbayoglu M. Evren."
                date="ASME-JSME-KSME Joint Fluids Engineering Conference 2011." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Determination of Cuttings Transport Properties of Aerated Drilling Fluids." 
                writers="Özbayoglu, A.M., Osgouei R.E., M.E. Özbayoglu, and H.E. Yüksel."
                date="IPETGAS 2011, Ankara-Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Sinyal Gücüne Baglı Bina içi Konum Tespiti Modelleri Karsılastırılması." 
                writers="Özbayoglu, A.M and I.S Kök."
                date="Fırat Üniversitesi Elektrik-Elektronik Bilgisayar Sempozyumu (FEEB 2011), pp. 99– 104." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Determination of Air/Fuel and Steam/Fuel Ratio for Coal Gasification Process to Produce Synthesis Gas." 
                writers="A. Güngör, A.M Ozbayoglu, C. Kasnakoglu, A. Biyikoglu, and B.Z Uysal."
                date="Journal of Environmental Science and Engineering vol. 5.5, pp. 799–804, June 2011." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimation of Multiphase Flow Properties using Computational Intelligence Models." 
                writers="Ozbayoglu, A Murat and H Ertan Yuksel."
                date="Procedia Computer Science, Complex Adaptive Systems, CAS 2011. Vol. 6, pp. 493–498." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Effect of Operation Parameters on Gasification For The Production of Synthesis Gas." 
                writers="Bıyıkoglu, Atilla, Afsin Güngör, Cosku Kasnakoglu, Özbayoglu, Murat, and Zühtü Uysal."
                date="27th Annual International Pittsburgh Coal Conference." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Determination of Air/Fuel and Steam/Fuel ratio for Coal Gasification process to produce Synthesis Gas." 
                writers="Gungor, Afsin, Ozbayoglu, Murat, Cosku Kasnakoglu, Atilla Biyikoglu, and Bekir Zuhtu Uysal."
                date="2nd International Conference on Nuclear and Renewable Energy Sources." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Hole Cleaning Performance of Gasified Drilling Fluids in Horizontal Well Sections. Paper SPE 131378," 
                writers="Osgouei, R.E, M.E Ozbayoglu, Ozbayoglu, A.M, and E Yuksel."
                date="SPE International Oil and Gas Conference & Exhibition." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Flow pattern identification of gas-liquid flow through horizontal annular geometries. Paper SPE 129123," 
                writers="Osgouei, Reza Ettehadi, ME Ozbayoglu, Ozbayoglu, MA, and E Yuksel."
                date="SPE oil and gas conference and exhibition, Mumbai, India." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Regression Techniques and Neural Network for the Estimation of Gross Calorific Value of Turkish Coals." 
                writers="Özbayoglu, A.M., M.E. Özbayoglu, and G. Özbayoglu."
                date="XIIth International Mineral Processing Symposium, Cappadocia-Nevsehir, Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Determination of Coal Gasification parameters for the production of Synthesis Gas." 
                writers="Bıyıkoglu, Atilla, Cosku Kasnakoglu, Özbayoglu, A. Murat, Afsin Güngör, D.Ö Özgür, and B. Zühtü Uysal."
                date="9th National Chemical Engineering Congress (UKMK-9)." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Stock Market Technical Indicator Optimization by Genetic Algorithms." 
                writers="Ozbayoglu, A.Murat and Umur Erkut."
                date="Artificial Neural Networks for Engineering 2010 (ANNIE 2010). ASME Press, pp. 589–596." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="An Analysis of Water Gas-Shift Reactor Battery System for Synthesis Gas Refinement." 
                writers="Ozbayoglu, Murat, Cosku Kasnakoglu, Afsin Gungor, Atilla Biyikoglu, and Bekir Zuhtu Uysal."
                date="11th International Combustion Symposium." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimation of very-difficult-to-identify data for hole cleaning, cuttings transport and pressure drop estimation in directional and horizontal drilling." 
                writers="Ozbayoglu, Mehmet Evren, Reza Ettehadi Osgouei, Ozbayoglu, Ahmet, Ertan Yuksel."
                date="IADC/SPE Asia Pacific Drilling Technology Conference and Exhibition. Society of Petroleum Engineers." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Performance Analysis of Moments in Invariant Object Classification." 
                writers="Imamoglu, N, A Eresen, A Yagcı, and Ozbayoglu, A.M."
                date="Intelligent Engineering Systems Through Artificial Neural Networks. ASME, pp. 447–454." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Determination of Cutting Concentration through Horizontal Annular Geometry by using Image Processing Techniques." 
                writers="M.E., Ozbayoglu, Ozbayoglu A.M., Osgouei R.E., and Yuksel E."
                date="IPETGAS 09, Ankara - Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Determination of Liquid Hold up through Horizontal Annular Geometry by using Image Processing Techniques." 
                writers="M.E., Ozbayoglu, Ozbayoglu A.M., Osgouei R.E., and Yuksel E."
                date="IPETGAS 09, Ankara-Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimating flow patterns and frictional pressure losses of two-phase fluids in horizontal wellbores using artificial neural networks." 
                writers="Ozbayoglu, EM and Ozbayoglu, MA."
                date="Petroleum Science and Technology 27.2, pp. 135-149." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimation of Hardgrove grindability index of Turkish coals by neural networks." 
                writers="Özbayoglu, Gülhan, Özbayoglu, A Murat, and Özbayoglu, M Evren."
                date="International Journal of Mineral Processing 85.4, pp. 93-100." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Comparison of Bayesian Estimation and Neural Network Model in Stock Market Trading." 
                writers="Ozbayoglu, A.M and I Bahadır."
                date="Intelligent Engineering Systems Through Artificial Neural Networks. ASME, pp. 581–586." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Hardgrove Grindability Index Estimation using Neural Networks" 
                writers="Özbayoglu, A.M. and G. Özbayoglu."
                date="International Mineral Processing Symposium (IMPS 2008). International Mineral Processing Symposium (IMPS 2008), Antalya, Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Neural network and genetic programming in pressure loss estimation in eccentric pipe flow." 
                writers="Ozbayoglu, A.Murat, Z Aydiner, C Kasnakoglu, and M.E. Ozbayoglu."
                date="Intelligent Engineering Systems Through Artificial Neural Networks. ASME, pp. 163–170." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Neural based Technical Analysis in Stock Market Forecasting." 
                writers="Ozbayoglu, A.Murat."
                date="Intelligent Engineering Systems Through Artificial Neural Networks. ASME, pp. 261–266." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Using Neural Networks For Flow Pattern And Frictional Loss Estimation For Aerated Drilling Fluids." 
                writers="Ozbayoglu, AM, ME Ozbayoglu"
                date="Canadian International Petroleum Conference. Petroleum Society of Canada." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Flow pattern and frictional-pressure-loss estimation using neural networks for UBD operations." 
                writers="Ozbayoglu, M.Evren and Ozbayoglu, A.Murat."
                date="IADC/SPE Managed Pressure Drilling & Underbalanced Operations." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Akıllı aracıların e-saglıkta kullanımı: Hastalık teshis modelleri." 
                writers="Özbayoglu, A.M."
                date="2. E-Saglık Çalıstayı." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="CS0: TOBB ETÜ’de Bilgisayar Mühendisligine Giris Dersi." 
                writers="Erten, Murat, Özbayoglu, Murat, and Bülent Tavlı."
                date="Akademik Bilisim 2007." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Yapay Sinir Agları kullanarak hazırlanan bir Hisse senedi deger tahmini uygulaması." 
                writers="Özbayoglu, A.M."
                date="TOK 06, Otomatik Kontrol Ulusal Toplantısı, pp. 149–152." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimation of Foam Stability Properties Using Image Processing and Artificial Neural Networks." 
                writers="Strauss, H, Ozbayoglu, A.M, and M.E Ozbayoglu."
                date="5th North American Conference on Multiphase Technology." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Yönsel Bant geçiren filtre ve yapay sinir agları yardımıyla otomatik parmak izi sınıflandırma ve tanıma islemi." 
                writers="Özbayoglu, A.M."
                date="II. Polis Bilisim Sempozyumu, pp. 234–237." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Unsupervised hierarchical fingerprint matching." 
                writers="Murat Ozbayoglu, A and CH Dagli."
                date="Neural Networks, 1997., International Conference on. Vol. 3. IEEE, pp. 1439–1442." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Hierarchical fingerprint identification based on an unsupervised neural network model." 
                writers="Ozbayoglu, Ahmet Murat."
                date="PhD thesis. Engineering Management Dept, University of Missouri-Rolla." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="An Application to Speaker Identification Using SimNet." 
                writers="Enke, D, HC Lee, Ozbayoglu, AM, A Thammano, and CH Dagli."
                date="Intelligence Engineering Systems Through Artificial Neural Networks. Vol. 5." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="SimNet: Sınıflandırma uygulamaları için bir yapay sinir agı." 
                writers="Özbayoglu, A.M, H.C Lee, C.H Daglı, F Erçal, and D. Enke."
                date="XVIIth National Conference on Operational Research and Industrial Engineering Conference." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="SimNet: A Parallel Neuro-Fuzzy Paradigm for Data Clustering." 
                writers="Lee, HC, CH Dagli, F Ercal, and Ozbayoglu, AM."
                date="OAI Neural Networks Symposium and Workshop (OAINN’95)." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Ögütme Devresinin Yapay Sinir Agları ile Modellenmesi." 
                writers="Sönmezer, O, G Özbayoglu, Ü Atalay, Özbayoglu, M, and C. Daglı."
                date="Madencilikte Bilgisayar Uygulamaları Sempozyumu, pp. 211–217." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Automated visual inspection system based on Hausdorff-Vioronoi network (HAVNET) architecture." 
                writers="Burkett, K, Ozbayoglu, MA, and CH Dagli."
                date="Proceedings-SPIE The International Society For Optical Engineering, pp. 2344–2347." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Automated visual inspection system based on HAVNET architecture." 
                writers="Burkett, K, Ozbayoglu, Murat A, and Cihan H Dagli."
                date="Photonics for Industrial Applications. International Society for Optics and Photonics, pp. 361–371." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A hierarchial neural network implementation for forecasting." 
                writers="Ozbayoglu, MA, CH Dagli, and B Fulkerson."
                date="Neural Networks, 1994. IEEE World Congress on Computational Intelligence., 1994 IEEE International Conference on. Vol. 5, pp. 3184–3189." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Autonomous parts assembly: comparison of ART and neocognitron." 
                writers="Rosandich, Ryan G, Ozbayoglu, Murat A, Eric W Roddiger, and Cihan H Dagli."
                date="Optical Engineering and Photonics in Aerospace Sensing. International Society for Optics and Photonics, pp. 480–490." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />

            
        </section>
    );
}

export default Publications;