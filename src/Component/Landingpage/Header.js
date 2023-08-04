import React from 'react'
import "./Header.css";

const Header = () => {
    return (


        <div className="main-container">
            <div className="main-heading">
                <div className='first-heading'>
                    <p>Virtual</p>
                    <p>Cloud Servers</p>
                </div>
                <div class="input-box">
                    <i class="search"></i>
                    <input type="text" placeholder="Search Domain" />
                    <button class="button">Search</button>
                </div>

                <div className='third-heading'>
                    <div className='main-button'>
                        <div className='first-button' >Get Prices</div>
                        <div className='second-button'> Learn More</div>
                    </div>
                </div>
            </div>
            {/* <div className="main-image">
                    <img className='main-header-image' src="img/cloudvps.svg"></img>
                </div> */}
        </div>


    )
}

export default Header