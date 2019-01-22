import React, { Component } from 'react';
 
class Subpagebanner extends Component {

 
  render() {
    return (
      
			<div className="sub-page-banner-div clearfix">
				<div className="sub-page-banner clearfix">
					<div className="container">
						<div className="row">
							<div className="col-xl-12 col-sm-12"><h1 className="page-title">{this.props.title}<div className="title-bdr"></div></h1></div>
						</div>
					</div>

				</div>

			</div>

    );
  }
}

export default Subpagebanner;
