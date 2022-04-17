import React, { useState } from "react";
import { Link } from "react-router-dom";
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
                      <h1 className="carousel-text-heading text-uppercase">Photographers <span className="orange-text">Zone</span></h1>
                     <p className="carousel-text-paragraph opacity-75 mb-4 banner-text">Want to make your moment happy!!!. Dont't worry I am here to capture your beautiful moment. I am covering many national and international photoshoot. <br/> So stop thinking and click the contact us button to talk with me.</p>
                     <Link to='/contact' className="text-white contact-btn">Contact Us</Link>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={sliderImg2} className="d-block carousel-image" alt="..."/>
                    <div className="carousel-caption d-md-block">
                      <h1 className="carousel-text-heading text-uppercase">Photographers <span className="orange-text">Zone</span></h1>
                     <p className="carousel-text-paragraph opacity-75 mb-4 banner-text">Want to make your moment happy!!!. Dont't worry I am here to capture your beautiful moment. I am covering many national and international photoshoot. <br/> So stop thinking and click the contact us button to talk with me.</p>
                      <Link to='/contact' className="text-white contact-btn">Contact Us</Link>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={sliderImg3} className="d-block carousel-image" alt="..."/>
                    <div className="carousel-caption d-md-block">
                      <h1 className="carousel-text-heading text-uppercase">Photographers <span className="orange-text">Zone</span></h1>
                     <p className="carousel-text-paragraph opacity-75 mb-4 banner-text">Want to make your moment happy!!!. Dont't worry I am here to capture your beautiful moment. I am covering many national and international photoshoot. <br/> So stop thinking and click the contact us button to talk with me.</p>
                      <Link to='/contact' className="text-white contact-btn">Contact Us</Link>
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
