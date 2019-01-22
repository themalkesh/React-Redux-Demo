import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; 
import Notifications from 'react-notify-toast';

import './assets/css/font-awesome.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/custom.css';

import Index from './Pages/Index';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import News from './Pages/News';
import Login from './Pages/Login';
 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Notifications />
            <Switch>
              <Route exact strict path='/' component={Index} />
              <Route exact strict path='/about' component={About} />
              <Route exact strict path='/service' component={Service} />
              <Route exact strict path='/news' component={News} />
              <Route exact strict path='/contact' component={Contact} />
              <Route exact strict path='/login' component={Login} />
               
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
