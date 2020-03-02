import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

//reusable components
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import PortfolioItem from '../common/PortfolioItem';

class Home extends Component {

    render() {
        return (
            <div>
                <Header
                    title='welcome to our studio'
                    subtitle='Its nice to meet you'
                    buttonText='Tell me More'
                    link='/services'
                    showButton={true}
                    image={image}
                />

                <Services />
                <Portfolio />
                
            </div>
        )
    }
}

export default Home;