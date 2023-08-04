import React from 'react';
import "./SharedHost.css"
import { AiFillCheckCircle } from 'react-icons/ai';

function SharedHost() {
    return (

        <div className="Hosting-Technical-Specifications">
            <div className="Hosting-Technical">
                <div className="Specifications">
                    <h2 >Hosting Technical Specifications</h2>
                    <p>Technical specifications play a vital role in determining the
                        performance, reliability, and scalability of a hosting service.
                        First and foremost, consider the server resources offered,
                        including CPU (Central Processing Unit), RAM (Random Access Memory),
                        and storage capacity. These resources directly impact the processing
                        power and speed of your website or application. Additionally,
                        assess the network connectivity and bandwidth provided by the
                        hosting provider to ensure that your website can handle the
                        expected traffic volume without bottlenecks. It is also essential
                        to examine the operating system options available, such as Linux
                        or Windows, to ensure compatibility with your website's technology
                        stack. Consider the database options, such as MySQL or PostgreSQL,
                        and ensure that they align with your application's requirements.
                        Security features like SSL certificates, firewalls, and DDoS
                        protection are crucial for safeguarding your data and protecting
                        against cyber threats. Finally, look into the scalability options,
                        including the ability to easily upgrade resources or switch to a
                        higher-tier hosting plan as your website or application grows.
                        By carefully evaluating and selecting the right hosting technical
                        specifications, you can ensure optimal performance, reliability,
                        and security for your online presence.</p>
                </div>


                <div className="Technical-Specifications-table">
                    <div className="Technical-Specifications">
                        <table>
                            <thead>
                                <tr>
                                    <td className='first-td'>
                                        <span classname="title">Software </span>
                                        <span classname="pink-bg">PLUS</span>
                                    </td>


                                    <td>
                                        <div classname="title">Databases</div>
                                    </td>

                                    <td>
                                        <div classname="title">Additional Software</div>
                                    </td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr >
                                    <td>
                                        <div className='tbody-main'>
                                            <span>
                                                <AiFillCheckCircle />

                                            </span>
                                           <u className='hover-me'> PHP 5.5/5.6/7.0/7.1 </u>
                                           <div className='hover-text'>This is the text that appears on hover.</div>
                                        </div>
                                    </td>

                                    <td className='grey-check'>
                                        <div>
                                            <span>

                                            </span>
                                            <p>
                                            <AiFillCheckCircle />     MYSQL 5.6
                                            </p>
                                        </div>
                                    </td>

                                    <td className='grey-check'>
                                        <div>
                                            <span>

                                            </span>

                                            <p>
                                            <AiFillCheckCircle />    Zend Engine
                                            </p>
                                        </div>
                                    </td>

                                </tr>
                                {/* second */}

                                <tr>
                                    <td>
                                        <div className='tbody-main'>
                                            <span>
                                                <AiFillCheckCircle />
                                            </span>
                                           <u> Perl</u>
                                        </div>
                                    </td>

                                    <td className='grey-check'>
                                        <div>
                                            <span>

                                            </span>
                                            <p>
                                            <AiFillCheckCircle />  phpMyAdmin 4.6.6
                                            </p>
                                        </div>
                                    </td>

                                    <td className='grey-check'>
                                        <div>
                                            <span>

                                            </span>

                                            <p>
                                            <AiFillCheckCircle />  Zend Optimizer
                                            </p>
                                        </div>
                                    </td>

                                </tr>
                                {/* THIRD */}
                                <tr>
                                    <td>
                                        <div className='tbody-main'>
                                            <span>
                                                <AiFillCheckCircle />
                                            </span>
                                            Python 2.6.6
                                        </div>
                                    </td>

                                    <td className='grey-check'>
                                        <div>
                                            <span>

                                            </span>
                                            <p>
                                            <AiFillCheckCircle /> FTPES Supported
                                            </p>
                                        </div>
                                    </td>

                                    <td className='grey-check'>
                                        <div>
                                            <span>

                                            </span>

                                            <p>
                                            <AiFillCheckCircle /> Zend Guard Loader
                                            </p>
                                        </div>
                                    </td>

                                </tr>
                                {/* FOURTH */}
                                <tr>
                                    <td>
                                        <div className='tbody-main'>
                                            <span>
                                                <AiFillCheckCircle />
                                            </span>
                                            PostgreSQL
                                        </div>
                                    </td>

                                    <td className='grey-check'>
                                        <div>
                                            <span>

                                            </span>
                                            <p>
                                            <AiFillCheckCircle /> MSSQL Stored Procedures
                                            </p>
                                        </div>
                                    </td>

                                    <td className='grey-check'>
                                        <div>
                                            <span>

                                            </span>

                                            <p>
                                            <AiFillCheckCircle /> ionCube Loader
                                            </p>
                                        </div>
                                    </td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SharedHost