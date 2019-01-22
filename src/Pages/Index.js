import React, { Component } from 'react';
 
import Header from '../Components/Header';
import Banner from '../Components/Banner'; 
import Lattestnews from '../Components/Lattestnews'; 
import Footer from '../Components/Footer'

class Index extends Component {
  render() {
    return (
      <div className="Home">
            <Header />
            <Banner />
            <div className="middle-container">
          <Lattestnews />
            </div>
            <Footer />
      </div>
    );
  }
}

export default Index;
