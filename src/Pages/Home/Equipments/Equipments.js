import React from 'react';
import './Equipments.css';
import corner from '../../../images/icon/corner-icon-7.jpg';
import corner1 from '../../../images/icon/corner-icon-8.jpg';
import camera from '../../../images/equipments/lens.png';
import gear1 from '../../../images/equipments/gear1.jpg';
import gear2 from '../../../images/equipments/gear2.jpg';
import gear3 from '../../../images/equipments/gear3.jpg';

const Equipments = () => {
    return (
        <div>
            
            <div className='d-flex align-items-center justify-content-center services-title'>
                <img className='corner-icon corner-icon-one' src={corner} alt="" />
                <img className='corner-icon corner-icon-two' src={corner1} alt="" />
                <h1 className='text-uppercase my-5 pt-1'>used <span className='title-span'>equipments</span></h1>
                <img className='corner-icon corner-icon-three'  src={corner} alt="" />
                <img className='corner-icon corner-icon-four' src={corner1} alt="" />
            </div>

            <div>
                <img className='img-fluid' src={camera} alt="" />
            </div>

            <div className='container'>
                <div className='row equipments'>
                    <div className='col-12 col-md-6 col-lg-4 equipments-img'>
                        <img className='img-fluid' src={gear1} alt="" />
                        <h3 className='equipments-text'>Canon r6</h3>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 equipments-img'>
                        <img className='img-fluid' src={gear2} alt="" />
                        <h3 className='equipments-text'>Spot Light</h3>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 equipments-img'>
                        <img className='img-fluid' src={gear3} alt="" />
                        <h3 className='equipments-text'>Zoom Lense</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Equipments;