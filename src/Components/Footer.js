import React, { Component } from 'react';
 
 

class Footer extends Component {
  render() {
    return (

        <footer>
            <div className="footer-div">
                <div className="container">
                    <div className="row">

                        <div className="footer-top clearfix">
                            <div className="col-lg-6 col-md-6 float-left">
                                <div className="footer-logo-div"><a href="#"><img src="images/logo.png" alt="" /></a></div>
                                </div> 
					<div className="col-lg-6 col-md-6 float-left">
                                    <div className="footer-call">
                                        <h4>Call Center</h4>
                                        <p>Office No: (240) 532-6632</p>
                                        <p>FAX: (866) 343-8019</p>
                                    </div>
                                    <div className="footer-location">
                                        <h4>Location</h4>
                                        <p>4518 Beech Road</p>
                                        <p>#330 Temple Hills MD 207488</p>
                                    </div>
                                </div> 
				</div>

                            <div className="footer-bottom clearfix">
                                <div className="col-lg-3 col-md-3 float-left">
                                    <ul className="footer-ul">
                                        <li><strong>Quick Links</strong></li>
                                        <li><a href="#">Delivery operations</a></li>
                                        <li><a href="#">Quality control</a></li>
                                        <li><a href="#">Management support</a></li>
                                        <li><a href="#">Customer support</a></li>
                                        <li><a href="#">Shipping</a></li>
                                    </ul>
                                </div> 
						<div className="col-lg-3 col-md-3 float-left">
                                    <ul className="footer-ul">
                                        <li><strong>Company</strong></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="#">Expertise</a></li>
                                        <li><a href="latestnews.html">News & Media</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div> 
						<div className="col-lg-3 col-md-3 float-left">
                                    <ul className="footer-ul">
                                        <li><strong>Services</strong></li>
                                        <li><a href="#">Logistics</a></li>
                                        <li><a href="#">Warehousing</a></li>
                                        <li><a href="#">Non-Hazardous Waste</a></li>
                                            <li><a href="#">Mover</a></li>
                                            <li><a href="#">Federal Agencies</a></li>
								</ul>
						</div> 
						<div className="col-lg-3 col-md-3 float-left">
                                        <ul className="footer-ul">
                                            <li><strong>Usefull links</strong></li>
                                            <li><a href="#">Track Shipment</a></li>
                                            <li><a href="#">Warehouse Logistics</a></li>
                                            <li><a href="#">FAQ</a></li>
                                        </ul>
                                    </div> 
					</div>

                                <div className="footer-copy clearfix">
                                    <div className="col-lg-7 col-md-6 float-left">
                                        <span className="txt">&copy 2018 Blockchain / All rights reserved</span>
                                    </div>
                                    <div className="col-lg-5 col-md-6 float-right text-right">
                                        <span className="txt"><a href="#">Privacy</a>  /   <a href="#">Terms & Conditions</a>  /   <a href="#">Site map</a></span>
                                        <span className="footer-social"><a href="#"><i className="fa fa-facebook"></i></a>  <a href="#"><i className="fa fa-twitter "></i></a>   <a href="#"><i className="fa fa-linkedin "></i></a> <a href="#"><i className="fa fa-youtube  "></i></a></span>
                            </div>


                        </div>

                    </div> 
		</div> 
        
        
	</div> 
        
</footer>
 
    );
  }
}

export default Footer;
