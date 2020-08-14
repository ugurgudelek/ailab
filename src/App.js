import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
 
import Home from './components/Home';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Team from './components/Team';
import Footer from './components/Footer';
import MuratOzbayoglu from './components/members/MuratOzbayoglu';
import MFatihDemirci from './components/members/MFatihDemirci';
import FurkanDolasik from './components/members/FurkanDolasik';
import UgurGudelek from './components/members/UgurGudelek';
import ScrollToTop from './ScrollToTop';
import MustafaUcar from './components/members/MustafaUcar';
import SelimSefaSarikan from './components/members/SelimSefaSarikan';
import MuhammedYilmaz from './components/members/MuhammedYilmaz';
import IzzetBarisOzturk from './components/members/IzzetBarisOzturk';
import BarisGuneyOzdilli from './components/members/BarisGuneyOzdilli';
import MustafaMertKeskin from './components/members/MustafaMertKeskin';
import ErdemKaraosmanoglu from './components/members/ErdemKaraosmanoğlu';
import FurkanKoc from './components/members/FurkanKoc';
import OzgenilMeric from './components/members/OzgenilMeric';
import NehirIdilYuksel from './components/members/NehirIdilYuksel';
import AyhanAkbas from './components/members/AyhanAkbas';
import OmerBeratSezer from './components/members/OmerBeratSezer';
import DervisUtkuUfuk from './components/members/DervisUtkuUfuk';
import ArasCanOnal from './components/members/ArasCanOnal';
import MustafaSari from './components/members/MustafaSari';
import GokhanKucukayan from './components/members/GokhanKucukayan';
import JeyhunKarimov from './components/members/JeyhunKarimov';

 
class App extends Component {
    render() {
        return (      
            <HashRouter>
            <div>
                <Navigation/>
                <ScrollToTop />
                <Switch>
                    <Route path="/" component={HomePage} exact/>   
                    <Route path="/ailab" component={Home} exact/>                 
                    <Route path="/about" component={About}/>
                    <Route path="/team" component={Team}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/publications" component={Publications}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/team-murat-ozbayoglu" component={MuratOzbayoglu}/>
                    <Route path="/team-muhammed-fatih-demirci" component={MFatihDemirci}/>
                    <Route path="/team-furkan-dolasik" component={FurkanDolasik}/>
                    <Route path="/team-ugur-gudelek" component={UgurGudelek}/>
                    <Route path="/team-mustafa-ucar" component={MustafaUcar}/>
                    <Route path="/team-selim-sefa-sarikan" component={SelimSefaSarikan}/>
                    <Route path="/team-muhammed-yilmaz" component={MuhammedYilmaz}/>
                    <Route path="/team-izzet-baris-ozturk" component={IzzetBarisOzturk}/>
                    <Route path="/team-baris-guney-ozdilli" component={BarisGuneyOzdilli}/>
                    <Route path="/team-mustafa-mert-keskin" component={MustafaMertKeskin}/>
                    <Route path="/team-erdem-karaosmanoglu" component={ErdemKaraosmanoglu}/>
                    <Route path="/team-furkan-koc" component={FurkanKoc}/>
                    <Route path="/team-ozgenil-meric" component={OzgenilMeric}/>
                    <Route path="/team-nehir-idil-yuksel" component={NehirIdilYuksel}/>
                    <Route path="/team-omer-berat-sezer" component={OmerBeratSezer}/>
                    <Route path="/team-ayhan-akbas" component={AyhanAkbas}/>
                    <Route path="/team-dervis-utku-ufuk" component={DervisUtkuUfuk}/>
                    <Route path="/team-aras-can-onal" component={ArasCanOnal}/>
                    <Route path="/team-mustafa-sari" component={MustafaSari}/>
                    <Route path="/team-gokhan-kucukayan" component={GokhanKucukayan}/>
                    <Route path="/team-jeyhun-karimov" component={JeyhunKarimov}/>
                    <Route component={Error}/>
                </Switch>
                <Footer/>
            </div> 
            </HashRouter>
        );
    }
}
 
export default App;