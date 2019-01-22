import React, { Component } from 'react';
 
import Header from '../Components/Header';
import Subpagebanner from '../Components/Subpagebanner'; 
import Lattestnews from '../Components/Lattestnews'; 
import Footer from '../Components/Footer'

class News extends Component {
  render() {
    return (
      <div className="Home">
            <Header />
            <Subpagebanner title="News" />
            <div className="middle-container">
          <Lattestnews />
            </div>
            <Footer />
      </div>
    );
  }
}

export default News;
