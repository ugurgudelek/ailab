import React from 'react';
import { Link } from 'react-router-dom'

const BarisGuneyOzdilli = () => {
    return (
        <section className="page-section bg-light member">
            <header className="team-header-2 text-uppercase">Baris Guney Ozdilli</header>
            <div className="bg-bis">
                <h3 className="p-6 text-left w-50 inline">Baris Guney Ozdilli<br/>
                <span>MSc Student</span><hr/>
                <Link to="/Team" className="text-dark"><i className=" pr-3" class="fas fa-long-arrow-alt-left"></i>Back to team</Link></h3>
                <img className="m-3 w-25" src={require("../../assets/img/team/barisguneyozdilli.JPG")} alt=""/>
            </div>
            <div className="bg-light">
                <p className="w-50 text-left inline mt-3 pl-5">bgozdilli@gmail.com</p>
                <p className="w-50 text-left inline mt-3 border-left pl-3 border-dark pr-3">
                    Research Areas: <br/>
                    - Deep Learning <br/>
                    - Financial Forecasting <br/>
                    - NLP (Neuro Linguistic Programming) <br/>
                    Worked On: <br/>
                    - Integration of finance news with forecasting models
                </p>
            </div>
        </section>
    );
}
 
export default BarisGuneyOzdilli;
