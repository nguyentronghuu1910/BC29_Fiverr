import React from 'react'

import './index.scss'

export default function MarketPlace() {
    return (
        <div className="container">
            <h2 className="sub_title">Explore the marketplace</h2>
            <ul className="categories-list d-flex flex-wrap text-center">
                <li>
                    <a>
                        <img
                            className="img-fluid"
                            src="./images/icons/graphics-design.d32a2f8.svg"
                            alt=""
                        />
                        <p className="job_name">Graphics & Design</p>
                    </a>
                </li>
                <li>
                    <a>
                        <img
                            className="img-fluid"
                            src="./images/icons/online-marketing.74e221b.svg"
                            alt=""
                        />
                        <p className="job_name">Digital Marketing</p>
                    </a>
                </li>
                <li>
                    <a>
                        <img
                            className="img-fluid"
                            src="./images/icons/writing-translation.32ebe2e.svg"
                            alt=""
                        />
                        <p className="job_name">Writing & Translation</p>
                    </a>
                </li>
                <li>
                    <a>
                        <img
                            className="img-fluid"
                            src="./images/icons/video-animation.f0d9d71.svg"
                            alt=""
                        />
                        <p className="job_name">Video & Animation</p>
                    </a>
                </li>
                <li>
                    <a>
                        <img
                            className="img-fluid"
                            src="./images/icons/music-audio.320af20.svg"
                            alt=""
                        />
                        <p className="job_name">Music & AudioMusic & Audio</p>
                    </a>
                </li>
                <li>
                    <a>
                        <img
                            className="img-fluid"
                            src="./images/icons/programming.9362366.svg"
                            alt=""
                        />
                        <p className="job_name">Programming & Tech</p>
                    </a>
                </li>
                <li>
                    <a>
                        <img
                            className="img-fluid"
                            src="./images/icons/business.bbdf319.svg"
                            alt=""
                        />
                        <p className="job_name">Business</p>
                    </a>
                </li>
                <li>
                    <a>
                        <img
                            className="img-fluid"
                            src="./images/icons/lifestyle.745b575.svg"
                            alt=""
                        />
                        <p className="job_name">Lifestyle</p>
                    </a>
                </li>
                <li>
                    <a>
                        <img className="w-100" src="./images/icons/data.718910f.svg" alt="" />
                        <p className="job_name">Data</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}
