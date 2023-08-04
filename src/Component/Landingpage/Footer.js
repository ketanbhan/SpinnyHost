import React from 'react';
import './Footer.css';
import { GrFacebookOption } from 'react-icons/gr';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaInstagramSquare, FaCcPaypal, FaCcVisa, FaApplePay } from 'react-icons/fa';
import { BiLogoMastercard } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className="footer-container">
            <img class="logo-bg logo-footer" src="img/symbol.png" alt="logo"></img>
            <div className='footer-main-cont'>
                <div className="footer-links">
                    <div className="main-footer-column">
                        <div className="footer-column">
                            <h3>Hosting</h3>
                            <a href="#SharedHosting">Shared Hosting</a>
                            <a href="#DedicatedServer">Dedicated Server</a>
                            <a href="#Cloud Virtual(VPS)">Cloud Virtual (VPS)</a>
                            <a href="#DomainNames">Domain Names</a>
                        </div>
                        <div className="footer-column">
                            <h3>Support</h3>
                            <a href="#SpinnyHost">Spinny Host</a>
                            <a href="#KnowledgeBase">Knowledge Base</a>
                            <a href="#ContactUs">Contact Us</a>
                            <a href="#FAQ">FAQ</a>
                        </div>
                        <div className="footer-column">
                            <h3>Company</h3>
                            <a href="#AboutUs">About Us</a>
                            <a href="#Features">Features</a>
                            <a href="#Blog">Blog</a>
                            <a href="#Legal">Legal</a>
                        </div>
                        <div className="social-links-container">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                               <img className='social-icon'></img>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <BsTwitter className="social-icon" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagramSquare className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-container">
                <div className='input-btn'>
                    <input type="text" placeholder="Enter you email address" className="search-bar" />
                    <button className="search-button">Subscribe</button>
                </div>
                <p>Subscribe to our newsletter to receive news and updates</p>
            </div>


            <div className="info-container">
                <div className='pow-info'>
                    <p>POWERED BY <a href="#Haarmk" className="haarmk-link"> HAARMK INFOTECH</a></p>
                </div>
                <div className='p   ay-info'>
                    <p className="payment-info">We accept payments <FaCcPaypal /> <FaCcVisa /> <BiLogoMastercard /> <FaApplePay /></p>
                </div>
            </div>

        </div>
    );
};

export default Footer;
