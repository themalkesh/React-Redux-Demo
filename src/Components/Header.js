import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doLogin } from '../actions/loginActions';
import { withRouter } from "react-router-dom";
import { doLogout } from '../actions/loginActions';

const ListItemLink = ({ to, className, liclassname, linkname }) => (
    <Route
        strict={true}
        exact={true}
        path={to}
        children={({ match }) => (
            <li className={liclassname + " " + (match ? "active" : "")}>
                <NavLink className={className} to={to} exact strict  > {linkname} </NavLink>
            </li>
        )}
    />
); 

class Header extends Component {

constructor(props) {
    super(props);
    this.doLogoutHeader = this.doLogoutHeader.bind(this);
    console.log(this.props.newUser)
    console.log(this.props.logoutUser)
}

 componentWillReceiveProps(nextProps) {
    
    console.log("new props comes Header");
    console.log(nextProps.logoutUser);

    if (nextProps.newUser) {
      
      this.props.newUser.username = nextProps.newUser.username;
      this.props.newUser.password = nextProps.newUser.password;
      this.props.newUser.userlogin = nextProps.newUser.userlogin;

      if(nextProps.newUser.userlogin == 'false'){
           console.log("new props comes Header false");
            this.props.history.push("/login");
        }  
        
    }
  }

 

  doLogoutHeader(e){
    e.preventDefault();
    return this.props.doLogout(this.props.newUser);
     
  }

  render() {
    
       
      var LoginLink = ''; 
       
      if(this.props.newUser.userlogin=='true'){
        LoginLink = <NavLink   className="getquote-link" to="/" exact strict onClick={this.doLogoutHeader}> Logout </NavLink>;   
      }else{
       LoginLink = <NavLink   className="getquote-link" to="/login" exact strict  >Login in</NavLink>;      
      } 
          
      const NavbarLinkWithoutLogin = <ul className="nav" id="nav-res">
          <ListItemLink liclassname="nav-item" className="nav-link" to="/" linkname="Home" />
          <ListItemLink liclassname="nav-item" className="nav-link" to="/about" linkname="About Us" />
          <ListItemLink liclassname="nav-item" className="nav-link" to="/service" linkname="Services" />
          <ListItemLink liclassname="nav-item" className="nav-link" to="/news" linkname="Latest News" />
          <ListItemLink liclassname="nav-item" className="nav-link" to="/contact" linkname="Contact Us" />

      </ul> ;

      
      const NavbarLinkWithLogin = <ul className="nav" id="nav-res">
          <ListItemLink liclassname="nav-item" className="nav-link" to="/" linkname="Dashboard" />
          <ListItemLink liclassname="nav-item" className="nav-link" to="/about" linkname="Products" />
          <ListItemLink liclassname="nav-item" className="nav-link" to="/service" linkname="Services" />
          <ListItemLink liclassname="nav-item" className="nav-link" to="/news" linkname="Reports" />
          <ListItemLink liclassname="nav-item" className="nav-link" to="/contact" linkname="Contact Us" />

      </ul> ;


      var NavbarLink = ''; 
      if(this.props.newUser.userlogin=='true'){
           NavbarLink = NavbarLinkWithLogin; 
      }else{
        
        NavbarLink = NavbarLinkWithoutLogin;  
      } 

       
    return (
      <header>
        <div className="header-div">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 login-box">
                        <div className="logo-div m-hidden ">
                            <a href="index.html">
                                <img src="images/logo-white.png" alt="" />
                            </a>
                        </div>
                        <div className="logo-div desktop-hidden fixed-logo">
                            <a href="index.html">
                                <img src="images/logo.png" alt=""/>
                            </a>
                        </div>
                    </div>
                        <div className="nav-m-bar"><a href="#"  className="" data-placement="bottom" title="" data-original-title="Menu">
                            <i className="menu-bars"></i></a>
                    </div>
                    <div className="col-lg-9 col-md-9 nav-col">
                        <div className="nav-div clearfix" id="mySidenav" >
                            <a href="javascript:void(0)" className="closebtn"  >&times;</a>
                                {NavbarLink}
                            </div>
                        <div className="quote-blk">
                                {LoginLink}
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </header>
    );
  }
}


Header.propTypes = {
    newUser: PropTypes.object,
    logoutUser: PropTypes.object,
};
 
const mapStateToProps = state => 
  ({
    newUser: state.login.user,
    logoutUser: state.login.user
});
 
console.log(mapStateToProps);

export default withRouter(connect(mapStateToProps, {doLogout})(Header));
