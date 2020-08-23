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
                    <Member 
                        name="Murat Ozbayoglu" 
                        title="Associate Professor" 
                        link="team-murat-ozbayoglu" 
                        img={MuratOzbayogluImg}
                        linkedin="https://www.linkedin.com/in/mozbayoglu"
                    />
                    <Member 
                        name="M.Fatih Demirci" 
                        title="Associate Professor" 
                        link="team-muhammed-fatih-demirci" 
                        img={MFatihImg}
                    />
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5 project-header-bg">PhD Students</h3>
                </div>
                <div className="row">
                    <Member 
                        name="Ugur Gudelek" 
                        title="PhD Student" 
                        link="team-ugur-gudelek" 
                        img={UgurGudelekImg} 
                        linkedin="https://www.linkedin.com/in/ugur-gudelek-496403127/"
                    />
                    <Member 
                        name="Mustafa Ucar" 
                        title="PhD Student" 
                        link="team-mustafa-ucar"
                    />
                    <Member 
                        name="Selim Sefa Sarikan" 
                        title="PhD Student" 
                        link="team-selim-sefa-sarikan"
                    />
                    <Member 
                        name="Muhammed Yilmaz" 
                        title="PhD Student" 
                        link="team-muhammed-yilmaz"
                    />
                    <Member 
                        name="Ayhan Akbas" 
                        title="Graduation: April 2016" 
                        link="team-ayhan-akbas"
                    />
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5 project-header-bg">MSc Students</h3>
                </div>
                <div className="row">
                    <Member 
                        name="Izzet Baris Ozturk" 
                        title="MSc Student" 
                        link="team-izzet-baris-ozturk" 
                        img={izzetBarisImg}
                    />
                    <Member 
                        name="Baris Guney Ozdilli" 
                        title="MSc Student" 
                        link="team-baris-guney-ozdilli" 
                        img={BarisGuneyOzdilliImg}
                        linkedin="https://www.linkedin.com/in/bar%C4%B1%C5%9F-g%C3%BCney-%C3%B6zdilli-11938ab1/"
                    />
                    <Member 
                        name="Mustafa Mert Keskin" 
                        title="MSc Student" 
                        link="team-mustafa-mert-keskin"
                    />
                    <Member 
                        name="Erdem Karaosmanoglu" 
                        title="MSc Student" 
                        link="team-erdem-karaosmanoglu"
                    />
                    <Member 
                        name="Furkan Koc" 
                        title="MSc Student" 
                        link="team-furkan-koc"
                    />
                    <Member 
                        name="Ozgenil Meric" 
                        title="MSc Student" 
                        link="team-ozgenil-meric"
                    />
                    <Member 
                        name="Dervis Utku Ufuk" 
                        title="Graduation: March 2019" 
                        link="team-dervis-utku-ufuk"
                    />
                    <Member 
                        name="Mustafa Sari" 
                        title="Graduation: December 2018" 
                        link="team-mustafa-sari"
                    />
                    <Member
                      name="Gokhan Kucukayan" 
                        title="Graduation: April 2016" 
                        link="team-gokhan-kucukayan"
                    />
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5 project-header-bg">Undergraduate Students</h3>
                </div>
                <div className="row">
                    <Member 
                        name="Furkan Dolasik" 
                        title="Student" 
                        link="team-furkan-dolasik" 
                        img={FurkanDolasikImg}
                        linkedin="https://www.linkedin.com/in/furkan-dola%C5%9F%C4%B1k-82a563153/"
                    />
                    <Member 
                        name="Nehir Idil Yuksel" 
                        title="Student" 
                        link="team-nehir-idil-yuksel" 
                        img={NehirIdilYukselImg}
                        linkedin="https://www.linkedin.com/in/nehir-idil-y%C3%BCksel-32b413153/"
                    />
                </div>
                <div className="text-left">
                    <h3 className="team-header mb-5 project-header-bg">Alumni</h3>
                </div>
                <div className="row">
                <Member 
                    name="Omer Berat Sezer" 
                    title="Graduation: May 2018" 
                    link="team-omer-berat-sezer"
                />
                <Member 
                    name="Jeyhun Karimov" 
                    title="Graduation: December 2015" 
                    link="team-jeyhun-karimov"
                />
                <Member 
                    name="Aras Can Onal" 
                    title="Graduation: March 2019" 
                    link="team-aras-can-onal"
                />
                </div>
            </div>
        </section>
    );
}
 
export default Team;