import React from 'react';
import { Link } from 'react-router-dom'

const FurkanDolasik = () => {
    return (
        <section className="page-section bg-light member">
            <header className="team-header-2">FURKAN DOLAŞIK</header>
            <div className="bg-bis">
                <h3 className="p-6 text-left w-50 inline">Furkan Dolaşık<br/>
                <span>Student</span><hr/>
                <Link to="/Team" className="text-dark"><i className=" pr-3" class="fas fa-long-arrow-alt-left"></i>Back to team</Link></h3>
                <img className="m-3 w-25" src={require("../../assets/img/team/2.jpg")} alt=""/>
            </div>
            <div className="bg-light">
                <p className="w-50 text-left inline mt-3 pl-5">furkandol0640@gmail.com <br/> if exist website <br/>  if exist tel number </p>
                <p className="w-50 text-left inline mt-3 border-left pl-3 border-dark pr-3"> ABOUT!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, earum, reiciendis nostrum eaque facere provident eveniet porro sint, minus praesentium dolore deserunt beatae consequatur maiores esse ex voluptas neque laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi culpa sequi eveniet et enim esse delectus ipsam aspernatur labore? Odio sit minima explicabo perferendis itaque. Laborum debitis saepe at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dicta repellat cupiditate a, maxime quibusdam veniam deleniti nostrum illo? Atque deserunt totam porro aspernatur asperiores voluptate. Distinctio provident ad atque.</p>
            </div>
        </section>
    );
}
 
export default FurkanDolasik;
