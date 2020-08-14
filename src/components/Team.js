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
                    <Member name="Murat Ozbayoglu" title="Associate Professor" link="team-murat-ozbayoglu" img={MuratOzbayogluImg}/>
                    <Member name="M.Fatih Demirci" title="Associate Professor" link="team-muhammed-fatih-demirci" img={MFatihImg}/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5 project-header-bg">PhD Students</h3>
                </div>
                <div className="row">
                    <Member name="Ugur Gudelek" title="PhD Student" link="team-ugur-gudelek" img={UgurGudelekImg}/>
                    <Member name="Mustafa Ucar" title="PhD Student" link="team-mustafa-ucar"/>
                    <Member name="Selim Sefa Sarikan" title="PhD Student" link="team-selim-sefa-sarikan"/>
                    <Member name="Muhammed Yilmaz" title="PhD Student" link="team-muhammed-yilmaz"/>
                    <Member name="Omer Berat Sezer" title="PhD Student (Graduation: May 2018)" link="team-omer-berat-sezer"/>
                    <Member name="Ayhan Akbas" title="PhD Student (Graduation: April 2016)" link="team-ayhan-akbas"/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5 project-header-bg">MSc Students</h3>
                </div>
                <div className="row">
                    <Member name="Izzet Baris Ozturk" title="MSc Student" link="team-izzet-baris-ozturk" img={izzetBarisImg}/>
                    <Member name="Baris Guney Ozdilli" title="MSc Student" link="team-baris-guney-ozdilli" img={BarisGuneyOzdilliImg}/>
                    <Member name="Mustafa Mert Keskin" title="MSc Student" link="team-mustafa-mert-keskin"/>
                    <Member name="Erdem Karaosmanoglu" title="MSc Student" link="team-erdem-karaosmanoglu"/>
                    <Member name="Furkan Koc" title="MSc Student" link="team-furkan-koc"/>
                    <Member name="Ozgenil Meric" title="MSc Student" link="team-ozgenil-meric"/>
                    <Member name="Dervis Utku Ufuk" title="MSc Student (Graduation: March 2019)" link="team-dervis-utku-ufuk"/>
                    <Member name="Aras Can Onal" title="MSc Student (Graduation: March 2019)" link="team-aras-can-onal"/>
                    <Member name="Mustafa Sari" title="MSc Student (Graduation: December 2018)" link="team-mustafa-sari"/>
                    <Member name="Gokhan Kucukayan" title="MSc Student (Graduation: April 2016)" link="team-gokhan-kucukayan"/>
                    <Member name="Jeyhun Karimov" title="MSc Student (Graduation: December 2015)" link="team-jeyhun-karimov"/>
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5 project-header-bg">Undergraduate Students</h3>
                </div>
                <div className="row">
                    <Member name="Furkan Dolasik" title="Student" link="team-furkan-dolasik" img={FurkanDolasikImg}/>
                    <Member name="Nehir Idil Yuksel" title="Student" link="team-nehir-idil-yuksel" img={NehirIdilYukselImg}/>
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