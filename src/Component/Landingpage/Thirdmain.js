import React from 'react'
import "./Thirdmain.css"

function Thirdmain() {
    return (
        <div className='main-map'>
            <div className='map-container'>
                <div className='map-wrapper'>
                    <div className="row">
                        <div>
                            <h2 className='section-heading'>Our Datacenters Are Located In 7 Regions</h2>
                            <p className='section-subheading'>
                            <span className='golink'>Spinny Host operates datacenters in seven different regions, </span>
                           providing you with geographic diversity and the ability to choose the location that best suits your needs
                            <span className='purple'>Here are the regions</span>
                             where Spinny Host has datacenters
                             </p>
                        </div>
                        <div className='map-padd'>
                            <img src="img/map.svg"></img>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Thirdmain