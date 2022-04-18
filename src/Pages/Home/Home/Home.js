import axios from 'axios';
import React, { useEffect, useState } from 'react';
import corner from '../../../images/icon/corner-icon-7.jpg';
import corner1 from '../../../images/icon/corner-icon-8.jpg';
import Banner from '../Banner/Banner';
import Equipments from '../Equipments/Equipments';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        axios.get('services.json')
            .then(data => setServices(data.data));
    }, [])

    return (
        <div>
            <Banner></Banner>

            <div className='d-flex align-items-center justify-content-center services-title'>
                <img className='corner-icon corner-icon-one' src={corner} alt="" />
                <img className='corner-icon corner-icon-two' src={corner1} alt="" />
                <h1 className='text-uppercase my-5 pt-1'>my <span className='title-span'>services</span></h1>
                <img className='corner-icon corner-icon-three'  src={corner} alt="" />
                <img className='corner-icon corner-icon-four' src={corner1} alt="" />
            </div>

            <div className='container'>
                <div className='row g-5'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>

            <Equipments></Equipments>

        </div>
    );
};

export default Home;