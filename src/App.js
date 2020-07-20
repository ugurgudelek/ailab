import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
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

 
class App extends Component {
    render() {
        return (      
            <BrowserRouter>
            <div>
                <Navigation/>
                <ScrollToTop />
                <Switch>
                    <Route path="/" component={HomePage} exact/>   
                    <Route path="/ailab" component={Home}/>                 
                    <Route path="/about" component={About}/>
                    <Route path="/team" component={Team}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/publications" component={Publications}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/muratozbayoglu" component={MuratOzbayoglu}/>
                    <Route path="/mfatihdemirci" component={MFatihDemirci}/>
                    <Route path="/furkandolasik" component={FurkanDolasik}/>
                    <Route path="/ugurgudelek" component={UgurGudelek}/>
                    <Route component={Error}/>
                </Switch>
                <Footer/>
            </div> 
            </BrowserRouter>
        );
    }
}
 
export default App;