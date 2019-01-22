import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doLogin } from '../actions/loginActions';
 


class Loginform extends Component {
    constructor(props) {
        super(props);
        this.state  = {
               username: '', password: ''  
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
 
        if (nextProps.newUser) {  
            if(nextProps.newUser.userlogin == 'true'){
                this.props.history.push("/");
            }else{
                this.props.history.push("/login");
            }        
        }
    }
    onChange(e) {
        
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.doLogin(this.state);
         
    }

    render() {
        return (
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <form id="Login" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Email Address" name="username" onChange={this.onChange} value={this.state.username} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" onChange={this.onChange} value={this.state.password} />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Loginform.propTypes = {
    doLogin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    newUser: state.login.user
});

export default withRouter(connect(mapStateToProps, { doLogin  })(Loginform));
 
