import React, { Component } from 'react';
 
import Header from '../Components/Header';
import Subpagebanner from '../Components/Subpagebanner'; 
import Aboutsection from '../Components/Aboutsection'; 
import Footer from '../Components/Footer'

class Contact extends Component {
  render() {
    return (
      <div className="Home">
            <Header />
        <Subpagebanner title="Contact" />
            <div className="middle-container">
          <Aboutsection />
            </div>
            <Footer />
      </div>
    );
  }
}

export default Contact;
