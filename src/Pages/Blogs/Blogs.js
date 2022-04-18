import React from "react";
import { Accordion } from "react-bootstrap";
import './Blogs.css';
import corner from '../../images/icon/corner-icon-7.jpg';
import corner1 from '../../images/icon/corner-icon-8.jpg';

const Blogs = () => {
  return (
    <div className="blogs container">

        <div className='d-flex align-items-center justify-content-center services-title shadow-lg'>
            <img className='corner-icon corner-icon-one' src={corner} alt="" />
            <img className='corner-icon corner-icon-two' src={corner1} alt="" />
            <h1 className='text-uppercase my-5 pt-1'>questions <span className='text-color' className='title-span'> answers</span></h1>
            <img className='corner-icon corner-icon-three'  src={corner} alt="" />
            <img className='corner-icon corner-icon-four' src={corner1} alt="" />
        </div>

        <div className="shadow-lg">
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h2>Difference between authorization and authentication?</h2>
                </Accordion.Header>
                <Accordion.Body>
                <h5>The differences are:</h5>
                    <ol>
                        <li><span className='text-color'>Authentication</span> verifies credentials   and <span className='text-color'>Authorization</span>  grants or denies permissions.</li>

                        <li><span className='text-color'>Authentication</span>  is visible to the user and <span className='text-color'>Authorization</span> is not visible to the user.</li>

                        <li><span className='text-color'>Authentication </span>  
                        usually done before authorization and <span className='text-color'>Authorization</span> usually done after successful authentication.</li>

                        <li><span className='text-color'>Authentication</span> partially changeable by the user and  <span className='text-color'>Authorization</span> isn’t changeable by the user.</li>

                        <li><span className='text-color'>Authentication</span> needs usually user’s login details <span className='text-color'>Authorization</span> needs user’s privilege or security levels.</li>

                        <li><span className='text-color'>Authentication</span> moves through ID tokens and <span className='text-color'>Authorization</span> moves through access tokens.</li>
                    </ol>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                </Accordion.Header>
                <Accordion.Body>
                    <h5>Reasons of using firebase:</h5>  
                    <ol>
                        <li>Faster then any backend web services</li>
                        <li>No need extra money spent for backend server</li>
                        <li>With Firebase, it's pretty simple to connect and use built-in third-party authentication providers.</li>
                        <li>Firebase is a good choice to deploy a working product on the cloud rapidly.</li>
                        <li>Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.</li>
                        <li>As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets.</li>
                        <li>High lvel security.</li>
                    </ol>

                    <h5>Firebase alternatives:</h5>
                    <ul className="text-color">
                        <li>NativeScript</li>
                        <li>Amplify JS</li>
                        <li>Parse</li>
                        <li>Back4App</li>
                        <li>Kuzzle</li>
                        <li>Game Sparks</li>
                        <li>Hoodie</li>
                        <li>Kinvey</li>
                        <li>Heroku</li>
                        <li>Kumulos</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    <h2>What other services does firebase provide other than authentication?</h2>
                </Accordion.Header>
                <Accordion.Body>
                <h5>Others services of firebase except authentication:</h5>
                <ul className="text-color">
                    <li>Hosting</li>
                    <li>Cloud Firestore</li>
                    <li>Remote Config</li>
                    <li>Google Analytics</li>
                    <li>Dynamic Links</li>
                    <li>Cloud Functions</li>
                    <li>Cloud Storage</li>
                    <li>Cloud Messaging</li>
                    <li>Predictions</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
    </div>
  );
};

export default Blogs;
