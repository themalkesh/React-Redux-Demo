import React, { Component } from 'react';
 
class Banner extends Component {
  render() {
    return (
      
    <div className="banner-div">
	    <div className="jwg_slider_module">
			<div className="slides">
			  <div className="slide">
				  <div className="banner-slide"><img src="images/Slider-1.jpg" alt=""/></div>
				  <div className="banner-caption">
						  <h2>Blockchain Logistics</h2>
						  <h3>Blockchain Logistics LLC is a blockchain logistics company that provides logistics support, warehousing, and non-hazardous hauling services.</h3>
						  <div><a href="#" className="seedetail-link">See Details</a><a href="#" className="quote-link">Quote for Logiatics</a></div>
				  </div>				
			  </div> 
			  <div className="slide">
					<div className="banner-slide"><img src="images/Slider-2.jpg" alt=""/></div>
					<div className="banner-caption">
							<h2>Blockchain Logistics</h2>
							<h3>Blockchain Logistics LLC is a blockchain logistics company that provides logistics support, warehousing, and non-hazardous hauling services.</h3>
							<div><a href="#" className="seedetail-link">See Details</a><a href="#" className="quote-link">Quote for Logiatics</a></div>
					</div>				
				</div> 
				<div className="slide">
						<div className="banner-slide"><img src="images/Slider-3.jpg" alt=""/></div>
						<div className="banner-caption">
								<h2>Blockchain Logistics</h2>
								<h3>Blockchain Logistics LLC is a blockchain logistics company that provides logistics support, warehousing, and non-hazardous hauling services.</h3>
								<div><a href="#" className="seedetail-link">See Details</a><a href="#" className="quote-link">Quote for Logiatics</a></div>
						</div>				
				</div> 
			  <div className="slide">
				  <div className="banner-slide"><img src="images/Slider-4.jpg" alt=""/></div>
				  <div className="banner-caption">
						  <h2>Blockchain Logistics</h2>
						  <h3>Blockchain Logistics LLC is a blockchain logistics company that provides logistics support, warehousing, and non-hazardous hauling services.</h3>
						  <div><a href="#" className="seedetail-link">See Details</a><a href="#" className="quote-link">Quote for Logiatics</a></div>
				  </div>				
			  </div> 
			</div>
			<div className="tabbed_navigation">
			  <ul>
				<li>
				  <div className="tabbed_nav"><span className="icon-1"><img src="images/icons/logistics.png" alt=""/></span><span className="txt">Logistics</span></div>
				</li>
				<li>
					<div className="tabbed_nav"><span className="icon-2"><img src="images/icons/non-hazardouswaste.png" alt=""/></span><span className="txt">Non-Hazardous Waste</span></div>
				</li>
				<li>
					<div className="tabbed_nav"><span className="icon-3"><img src="images/icons/mover.png" alt=""/></span><span className="txt">Mover</span></div>
				</li>
				<li>
						<div className="tabbed_nav"><span className="icon-4"><img src="images/icons/warehouse.png" alt=""/></span><span className="txt">Ware housing</span></div>
				</li>
			  </ul>
			</div>
		  </div>

</div>

    );
  }
}

export default Banner;
