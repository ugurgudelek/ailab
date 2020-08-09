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
                    <h3 className="team-header mb-5 project-header-bg">Professors</h3>
                </div>
                <div className="row">
                    <Member name="Murat Ozbayoglu" title="Associate Professor" link="MuratOzbayoglu" img={MuratOzbayogluImg}/>
                    <Member name="M.Fatih Demirci" title="Associate Professor" link="MFatihDemirci" img={MFatihImg}/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5 project-header-bg">PhD Students</h3>
                </div>
                <div className="row">
                    <Member name="Ugur Gudelek" title="PhD Student" link="UgurGudelek" img={UgurGudelekImg}/>
                    <Member name="Mustafa Ucar" title="PhD Student" link="MustafaUcar"/>
                    <Member name="Selim Sefa Sarikan" title="PhD Student" link="SelimSefaSarikan"/>
                    <Member name="Muhammed Yilmaz" title="PhD Student" link="MuhammedYilmaz"/>
                    <Member name="Omer Berat Sezer" title="PhD Student (Graduation: May 2018)" link="OmerBeratSezer"/>
                    <Member name="Ayhan Akbas" title="PhD Student (Graduation: April 2016)" link="AyhanAkbas"/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5 project-header-bg">MSc Students</h3>
                </div>
                <div className="row">
                    <Member name="Izzet Baris Ozturk" title="MSc Student" link="IzzetBarisOzturk" img={izzetBarisImg}/>
                    <Member name="Baris Guney Ozdilli" title="MSc Student" link="BarisGuneyOzdilli" img={BarisGuneyOzdilliImg}/>
                    <Member name="Mustafa Mert Keskin" title="MSc Student" link="MustafaMertKeskin"/>
                    <Member name="Erdem Karaosmanoglu" title="MSc Student" link="ErdemKaraosmanoglu"/>
                    <Member name="Furkan Koc" title="MSc Student" link="FurkanKoc"/>
                    <Member name="Ozgenil Meric" title="MSc Student" link="OzgenilMeric"/>
                    <Member name="Dervis Utku Ufuk" title="MSc Student (Graduation: March 2019)" link="DervisUtkuUfuk"/>
                    <Member name="Aras Can Onal" title="MSc Student (Graduation: March 2019)" link="ArasCanOnal"/>
                    <Member name="Mustafa Sari" title="MSc Student (Graduation: December 2018)" link="MustafaSari"/>
                    <Member name="Gokhan Kucukayan" title="MSc Student (Graduation: April 2016)" link="GokhanKucukayan"/>
                    <Member name="Jeyhun Karimov" title="MSc Student (Graduation: December 2015)" link="JeyhunKarimov"/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5 project-header-bg">Undergraduate Students</h3>
                </div>
                <div className="row">
                    <Member name="Furkan Dolasik" title="Student" link="FurkanDolasik" img={FurkanDolasikImg}/>
                    <Member name="Nehir Idil Yuksel" title="Student" link="NehirIdilYuksel" img={NehirIdilYukselImg}/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5 project-header-bg">Alumni</h3>
                </div>
                <div className="row">
                    <Member/>
                    <Member/>
                    <Member/>
                </div>
            </div>
        </section>
    );
}
 
export default Team;