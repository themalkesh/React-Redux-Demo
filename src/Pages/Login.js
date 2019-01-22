import React, { Component } from 'react';
 
import Header from '../Components/Header';
import Subpagebanner from '../Components/Subpagebanner'; 
import Loginform from '../Components/Loginform'; 
import Footer from '../Components/Footer'

class Login extends Component {
  render() {
    return (
      <div className="Home">
            <Header />
        <Subpagebanner title="Login" />
        <div className="middle-container">
              <Loginform />
            </div>
            <Footer />
      </div>
    );
  }
}

export default Login;
