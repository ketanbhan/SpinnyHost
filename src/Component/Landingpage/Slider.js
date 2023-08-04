import React from 'react'
import "./Slider.css"

function Slider() {
    return (
        <div className="slider-parent">
            <div className='slider-content'>
                <div className="slider-text">
                    <p className='slider-ant-text'> case study </p>
                </div>
                <div className="slider-image-container">
                    <img className="slider-bg-image" src="img/casestudy.png" alt="Case Study"></img>
                    <div class="image-overlay">
                        <h2>GrowTop Company</h2>
                        <p>Prioritize delivering reliable and secure hosting solutions, empowering businesses to establish<br/> a strong online presence and succeed in the digital landscape.</p>
                    <em><em> Matt Radford - President &amp; Managing Director</em></em>
                    </div>
                </div>
            </div>
            
        </div>





    )
}

export default Slider