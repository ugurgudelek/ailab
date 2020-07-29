import React from 'react';
import '../css/styles.css';
import Member from './Member';
import izzetBarisImg from '../assets/img/team/izzetbarisozturk.jpg';
import MFatihImg from '../assets/img/team/m_fatih_demirci.jpg';
import MuratOzbayogluImg from '../assets/img/team/murat_özbayoğlu.jpg';
import UgurGudelekImg from '../assets/img/team/ugurgudelek.jpeg';
import FurkanDolasikImg from '../assets/img/team/furkandolasik.jpg';
import BarisGuneyOzdilliImg from '../assets/img/team/barisguneyozdilli.JPG';
import NehirIdilYukselImg from '../assets/img/team/nehiridilyuksel.png';
 
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
                    <Member name="Ugur Gudelek" title="PhD Student" link="UgurGudelek" img={UgurGudelekImg}/>
                    <Member name="Mustafa Ucar" title="PhD Student" link="MustafaUcar"/>
                    <Member name="Selim Sefa Sarikan" title="PhD Student" link="SelimSefaSarikan"/>
                    <Member name="Muhammed Yilmaz" title="PhD Student" link="MuhammedYilmaz"/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5">MSc Students</h3>
                </div>
                <div className="row">
                    <Member name="Izzet Baris Ozturk" title="MSc Student" link="IzzetBarisOzturk" img={izzetBarisImg}/>
                    <Member name="Baris Guney Ozdilli" title="MSc Student" link="BarisGuneyOzdilli" img={BarisGuneyOzdilliImg}/>
                    <Member name="Mustafa Mert Keskin" title="MSc Student" link="MustafaMertKeskin"/>
                    <Member name="Erdem Karaosmanoglu" title="MSc Student" link="ErdemKaraosmanoglu"/>
                    <Member name="Furkan Koc" title="MSc Student" link="FurkanKoc"/>
                    <Member name="Ozgenil Meric" title="MSc Student" link="OzgenilMeric"/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5">Undergraduate Students</h3>
                </div>
                <div className="row">
                    <Member name="Furkan Dolasik" title="Student" link="FurkanDolasik" img={FurkanDolasikImg}/>
                    <Member name="Nehir Idil Yuksel" title="Student" link="NehirIdilYuksel" img={NehirIdilYukselImg}/>
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
            </div>
        </section>
    );
}
 
export default Team;