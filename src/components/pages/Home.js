import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

//reusable components
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import Timeline from '../common/Timeline';
import Team from '../common/Team';
//import PortfolioItem from '../common/PortfolioItem';

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
                <Timeline />
                <Team />
                
            </div>
        )
    }
}

export default Home;