import React, { Component } from 'react';
 
 

class Lattestnews extends Component {
  render() {
    return (
      
		<section className="latest-news-section">
			<div className="container">
				<div className="row">

				<div className="col-lg-12 col-md-12">
						<h2 className="blk-title">Latest <strong>News</strong></h2>
				</div> 

				<div className="latest-news-blk-div clearfix">
					<div className="col-lg-4 col-md-4 float-left">
						<div className="news-blk">
							<div className="thumb"><a href="#"><img src="images/news-img-1.jpg" alt=""/></a></div>
							<h5>Warehousing</h5>
							<div className="desc">
								<h4><a href="#">E-tailers exploring ways to improve reverse logistics costs: Study</a></h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur lectus non massa dignissim, et volutpat diam interdum. Praesent dignismagna placerat, a vestibulum eros convallis.</p>
								<a href="#" className="read-link">Read more</a>
							</div>

						</div>
					</div> 
					<div className="col-lg-4 col-md-4 float-left">
							<div className="news-blk">
								<div className="thumb"><a href="#"><img src="images/news-img-2.jpg" alt=""/></a></div>
								<h5>Special and Hazarodus Waste</h5>
								<div className="desc">
									<h4><a href="#">California marks wildfire debris removal milestone</a></h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur lectus non massa dignissim, et volutpat diam interdum. Praesent dignismagna placerat, a vestibulum eros convallis.</p>
									<a href="#" className="read-link">Read more</a>
								</div>
	
							</div>
					</div> 
					<div className="col-lg-4 col-md-4 float-left">
							<div className="news-blk">
								<div className="thumb"><a href="#"><img src="images/news-img-3.jpg" alt=""/></a></div>
								<h5>Logistics</h5>
								<div className="desc">
									<h4><a href="#">Yusen Logistics awarded CEIV Pharma certification at Kansai</a></h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur lectus non massa dignissim, et volutpat diam interdum. Praesent dignismagna placerat, a vestibulum eros convallis.</p>
									<a href="#" className="read-link">Read more</a>
								</div>
	
							</div>
					</div> 


				</div> 
				
				</div> 
			</div> 
		</section> 

    );
  }
}

export default Lattestnews;
