import React, { Component } from 'react';

 

class Servicesection extends Component {
    render() {
        return (

            <section className="services-section clearfix">
                <div className="services-div">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="services-blk">
                                    <div className="icon-txt-blk"><span className="icons icon-1"></span><span className="txt">Logistics</span></div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3">
                                <div className="services-blk">
                                    <div className="icon-txt-blk"><span className="icons icon-2"></span><span className="txt">Non-Hazardous Waste</span></div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3">
                                <div className="services-blk">
                                    <div className="icon-txt-blk"><span className="icons icon-3"></span><span className="txt">Mover</span></div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3">
                                <div className="services-blk">
                                    <div className="icon-txt-blk"><span className="icons icon-4"></span><span className="txt">Ware housing</span></div>
                                </div>
                            </div> 
                        </div> 
				    </div> 
			    </div> 
		    </section>  


        );
    }
}

export default Servicesection;
