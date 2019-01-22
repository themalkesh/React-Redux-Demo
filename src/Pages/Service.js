import React, { Component } from 'react';
 
import Header from '../Components/Header';
import Subpagebanner from '../Components/Subpagebanner'; 
import Servicesection from '../Components/Servicesection'; 
import Footer from '../Components/Footer'

class Service extends Component {
  render() {
    return (
      <div className="Home">
            <Header />
        <Subpagebanner title="Services" />
        <div className="middle-container">
              <Servicesection />
            </div>
            <Footer />
      </div>
    );
  }
}

export default Service;
