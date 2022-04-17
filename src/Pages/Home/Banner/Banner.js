import React, { useState } from "react";
import sliderImg1 from '../../../images/banner/banner1.png';
import sliderImg2 from '../../../images/banner/banner2.png';
import sliderImg3 from '../../../images/banner/banner3.png';
import './Banner.css';


const Banner = () => {  
  return (
  <div className="banner">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={sliderImg1} className="d-block carousel-image" alt="..."/>
                    <div className="carousel-caption d-md-block">
                      <h1 className="carousel-text-heading">PHOTOGRAPHERS</h1>
                     <p className="carousel-text-paragraph opacity-75">We want to make your momment happy. We have covered many national and international event successfully. <br/> So if you want to make your time enjoyable, we are here to welcome you.</p>
                     <button type="button" className="carousel-btn btn px-4 contact-btn">
                    <a className="text-white" href="https://www.diccbd.com/" target="_blank" rel="noopener   noreferrer">CONTACT US</a>
                     </button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={sliderImg2} className="d-block carousel-image" alt="..."/>
                    <div className="carousel-caption d-md-block">
                      <h1 className="carousel-text-heading">PHOTOGRAPHERS</h1>
                     <p className="carousel-text-paragraph opacity-75">We want to make your momment happy. We have covered many national and international event successfully. <br/> So if you want to make your time enjoyable, we are here to welcome you.</p>
                     <button type="button" className="carousel-btn btn px-4 contact-btn"><a className="text-white" href="https://www.diccbd.com/" target="_blank" rel="noopener noreferrer">CONTACT US</a></button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={sliderImg3} className="d-block carousel-image" alt="..."/>
                    <div className="carousel-caption d-md-block">
                      <h1 className="carousel-text-heading">PHOTOGRAPHERS</h1>
                     <p className="carousel-text-paragraph opacity-75">We want to make your momment happy. We have covered many national and international event successfully. <br/> So if you want to make your time enjoyable, we are here to welcome you.</p>
                     <button type="button" className="carousel-btn btn px-4 contact-btn"><a className="text-white" href="https://www.diccbd.com/" target="_blank" rel="noopener noreferrer">CONTACT US</a></button>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </div>
    );
};

export default Banner;
