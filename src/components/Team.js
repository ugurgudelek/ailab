import React from 'react';
import '../css/styles.css';
import Member from './Member';
import izzetBarisImg from '../assets/img/team/izzetbarisozturk.jpg';
import MFatihImg from '../assets/img/team/m_fatih_demirci.jpg';
import MuratOzbayogluImg from '../assets/img/team/murat_özbayoğlu.jpg';
 
const Team = () => {
    return (
        <section className="page-section bg-light mt-4 pb-0" id="team">
            <h3 className="text-center bg-dark-2 text-light pt-4 pb-4 mt-0 mb-5 w-100">TEAM</h3>
            <div className="container">
                <div className="text-left">
                    <h3 className="team-header mb-5">Professors</h3>
                </div>
                <div className="row">
                    <Member name="Murat Ozbayoglu" title="Assosiate Professor" link="MuratOzbayoglu" img={MuratOzbayogluImg}/>
                    <Member name="M.Fatih Demirci" title="Assosiate Professor" link="MFatihDemirci" img={MFatihImg}/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5">PhD Students</h3>
                </div>
                <div className="row">
                    <Member name="Ugur Gudelek" title="PhD Student" link="UgurGudelek"/>
                    <Member name="Mustafa Ucar" title="PhD Student" link="MustafaUcar"/>
                    <Member name="Selim Sefa Sarikan" title="PhD Student" link="SelimSefaSarikan"/>
                    <Member name="Muhammed Yilmaz" title="PhD Student" link="MuhammedYilmaz"/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5">MSc Students</h3>
                </div>
                <div className="row">
                    <Member name="Izzet Baris Ozturk" title="MSc Student" link="IzzetBarisOzturk" img={izzetBarisImg}/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5">Undergraduate Students</h3>
                </div>
                <div className="row">
                    <Member name="Furkan Dolasik" title="Student" link="FurkanDolasik"/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5">Alumni</h3>
                </div>
                <div className="row">
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
    );
}
 
export default Team;