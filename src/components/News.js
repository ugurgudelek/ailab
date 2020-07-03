import React from 'react';
import '../css/styles.css';

const News = () => {
    return (
        <section className="page-section bg-light">
            <div class="container">
                <h2>News</h2>
                <table class="table">
                    <tbody>
                    <tr>
                        <td>mm.dd.yy</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, omnis eaque? Minus, expedita? Quibusdam, aliquam.</td>
                        <td>
                            <a className="text-dark" href="#!">Read more
                                <i class="fas fa-long-arrow-alt-right"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>mm.dd.yy</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis aliquid optio laudantium tempora commodi praesentium.</td>
                        <td>
                            <a className="text-dark" href="#!">Read more
                                <i class="fas fa-long-arrow-alt-right"></i>
                            </a>
                        </td>                    
                    </tr>
                    <tr>
                        <td>mm.dd.yy</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias aut, a adipisci animi fugit.</td>
                        <td>
                            <a className="text-dark" href="#!">Read more
                                <i class="fas fa-long-arrow-alt-right"></i>
                            </a>
                        </td>                    
                    </tr>
                    <tr>
                        <td>
                            <a className="text-dark" href="#!">See all the news
                                <i class="fas fa-angle-double-right"></i>
                            </a>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}
 
export default News;
