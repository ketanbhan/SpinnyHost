import React from 'react'
import "./Cards.css"

function Cards() {
    return (
        <div className='main-card'>
            <div className="three-cards">
                <div className="first-card">
                    <div className="left-card-content">
                        <img className='card-image' src="img/livechat.svg"></img>
                    </div>
                    <div className="right-card-content">
                        <h4>Live Chat</h4>
                        <p>Real-time Support at Your <br/>
                        Fingertips: Live Chat with Our <br/>
                        Experts Now!Effortlessly <br/>
                        Resolve Issues</p>
                    </div>
                </div>

                <div className="second-card">
                    <div className="left-card-content">
                        <img className="card-image"src="img/emailopen.svg"></img>
                    </div>
                    <div className="right-card-content">
                       <h4>Send Ticket</h4>
                        <p>Effortlessly Resolve Issues:<br/>
                         Submit a Support Ticket for<br/>
                          Prompt Assistance!</p>
                    </div>
                </div>

                <div className="third-card">
                    <div className="left-card-content">
                        <img className='card-image' src="img/book.svg"></img>
                    </div>
                    <div className="right-card-content">
                        <h4>Knowledge Base</h4>
                        <p> Explore Our Knowledge Base <br/>
                        for Invaluable Resources and <br/>
                        Solutions!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards