import React from 'react';
import { Link } from 'react-router-dom'

const FurkanDolasik = () => {
    return (
        <section className="page-section bg-light member">
            <header className="team-header-2 text-uppercase">Furkan Dolasik</header>
            <div className="bg-bis">
                <h3 className="p-6 text-left w-50 inline mobile-name">Furkan Dolasik<br/>
                <span>Student</span><hr/>
                <Link to="/Team" className="text-dark"><i className=" pr-3" class="fas fa-long-arrow-alt-left"></i>Back to team</Link></h3>
                <img className="m-3 w-25 member-image" src={require("../../assets/img/team/furkandolasik.jpg")} alt=""/>
            </div>
            <div className="bg-light">
                <p className="w-50 text-left inline mt-3 pl-5 mobile-info">furkandol0640@gmail.com <br/></p>
                <p className="w-50 text-left inline mt-3 border-left pl-3 border-dark pr-3 mobile-about">Furkan Dolasik is currently continuing his undergraduate studies in Computer Engineering department at TOBB University of Economics and Technology. He worked as a intern for 3 months at TOBB ETU about web development. His skills about web development are: <br/> -Html, Css <br/> -Javascript <br/> -React.</p>
            </div>
        </section>
    );
}
 
export default FurkanDolasik;
