import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isHostingDropdownOpen, setIsHostingDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const closeHomeDropdown = () => {
    setIsHomeDropdownOpen(false);
  };

  const toggleHostingDropdown = () => {
    setIsHostingDropdownOpen(!isHostingDropdownOpen);
  };

  const closeHostingDropdown = () => {
    setIsHostingDropdownOpen(false);
  };

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  const closePagesDropdown = () => {
    setIsPagesDropdownOpen(false);
  };

  const toggleFeaturesDropdown = () => {
    setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen);
  };

  const closeFeaturesDropdown = () => {
    setIsFeaturesDropdownOpen(false);
  };

  const toggleSupportDropdown = () => {
    setIsSupportDropdownOpen(!isSupportDropdownOpen);
  };

  const closeSupportDropdown = () => {
    setIsSupportDropdownOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   
      <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
          <h2>Logo</h2>
        </div>
        <div className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <div
            className="navbar-item"
            onMouseEnter={toggleHomeDropdown}
            onMouseLeave={closeHomeDropdown}
          >
            <a href="#home">Home</a>
            <div className="navbar-item new-text">
              New
            </div>
            {isHomeDropdownOpen && <div className="line-animation"></div>}

            {isHomeDropdownOpen && (
              <div className="home-dropdown">
                <div className='first-home-drop'>
                  <img src="img/cloudfiber.svg"></img>
                  <a id='test' href="">Shared Hosting New</a>
                </div>
                <div className='second-home-drop'>
                  <img src="img/cloudfiber.svg"></img>
                  <a href="#premium-shared-hosting">Premium Shared Hosting </a>
                </div>
                <div className='third-home-drop'>
                  <img src="img/dedicated.svg"></img>
                  <a href="#dedicated-servers">Dedicated Servers</a>
                </div>
              </div>
            )}
          </div>
          <div
            className="navbar-item"
            onMouseEnter={toggleHostingDropdown}
            onMouseLeave={closeHostingDropdown}
          >
            <a href="#hosting">Hosting</a>
            {isHostingDropdownOpen && <div className="line-animation"></div>}

            <div className="navbar-item new-text">
              Pro
            </div>
            {isHostingDropdownOpen && (
              <div className="navbar-dropdown">
                <a href="#shared-hosting">Shared Hosting</a>
                <a href="#premium-shared-hosting">Premium Shared Hosting</a>
                <a href="#cloud-reseller">Cloud Reseller</a>
                <a href="#dedicated-servers">Dedicated Servers</a>
                <a href="#cloud-vps-ssd">Cloud VPS SSD</a>
                <a href="#wordpress-hosting">WordPress Hosting</a>
                <a href="#domains">Domains Names</a>
              </div>
            )}
          </div>
          <div
            className="navbar-item"
            onMouseEnter={togglePagesDropdown}
            onMouseLeave={closePagesDropdown}
          >
            <a href="#pages">Pages</a>
            {isPagesDropdownOpen && <div className="line-animation"></div>}

            {isPagesDropdownOpen && (
              <div className="navbar-dropdown">
                <a href="#email-security">Email Security NEW</a>
                <a href="#ssl-certificates">SSL Certificates</a>
                <a href="#about-us">About Us</a>
                <a href="#payment-methods">Payment Methods NEW</a>
                <a href="#configurator">Configurator HOT</a>
                <a href="#cart">Cart</a>
                <a href="#checkout">Checkout</a>
                <a href="#coming-soon">Coming Soon</a>
              </div>
            )}
          </div>
          <div
            className="navbar-item"
            onMouseEnter={toggleFeaturesDropdown}
            onMouseLeave={closeFeaturesDropdown}
          >
            <a href="#features">Features</a>
            {isFeaturesDropdownOpen && <div className="line-animation"></div>}
            {isFeaturesDropdownOpen && (
              <div className="navbar-dropdown">
                <a href="#content-sliders">Content Sliders</a>
                <a href="#configurator-new">Configurator NEW</a>
                <a href="#register">Register</a>
              </div>
            )}
          </div>
          <div
            className="navbar-item"
            onMouseEnter={toggleSupportDropdown}
            onMouseLeave={closeSupportDropdown}
          >
            <a href="#support">Support</a>
            {isSupportDropdownOpen && <div className="line-animation"></div>}
            {isSupportDropdownOpen && (
              <div className="navbar-dropdown">
                <a href="#knowledge-list">Knowledge List</a>
                <a href="#knowledge-article">Knowledge Article</a>
                <a href="#contact-us">Contact Us</a>
                <a href="#legal-new">Legal NEW</a>
                <a href="#blog-hot">Blog HOT</a>
                <a href="#faq">FAQ</a>
                <a href="#support-premium">Support Premium</a>
                <p>Call us: +91 7045865031 A-88/T07 SECTOR 04 NOIDA (NCR)</p>
              </div>
            )}
          </div>
          {/* New button for Client Area */}
          <div className="navbar-item client-area-btn">
            <a className=" client-hov" href="#client-area">
              Client Area
            </a>
          </div>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={isOpen ? 'bar bar1 open' : 'bar bar1'}></div>
          <div className={isOpen ? 'bar bar2 open' : 'bar bar2'}></div>
          <div className={isOpen ? 'bar bar3 open' : 'bar bar3'}></div>
        </div>
      </div>
      );
};

      export default Navbar;
