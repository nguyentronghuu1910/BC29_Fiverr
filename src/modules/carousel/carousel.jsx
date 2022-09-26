import React from 'react'
import { Carousel as CarouserAntd } from 'antd'

import './index.scss'

export default function Carousel() {
    const contentStyle = {
        height: '680px',
        width: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        objectPosition: 'center',
        objectFit: 'cover',
    }

    return (
        <div>
            <CarouserAntd autoplay>
                <div className="wrapper_img">
                    <img
                        style={contentStyle}
                        src="./images/carousel/bg-hero-1-1792-x1.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        style={contentStyle}
                        src="./images/carousel/bg-hero-2-1792-x1.jpg"
                        alt=""
                    />
                    <div className="info">
                        <div className="review"></div>
                        <div>
                            <span className="name">Andrea</span>
                            <span className="job">Fashion Designer</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        style={contentStyle}
                        src="./images/carousel/bg-hero-3-1792-x1.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        style={contentStyle}
                        src="./images/carousel/bg-hero-4-1792-x1.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        style={contentStyle}
                        src="./images/carousel/bg-hero-5-1792-x1.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        style={contentStyle}
                        src="./images/carousel/bg-signup-1400-x1.png"
                        alt=""
                    />
                </div>
            </CarouserAntd>

            <div className="trusted_by d-flex justify-content-center">
                <span className="d-flex align-items-center">Trusted by:</span>
                <ul className="list_partner d-flex align-items-center">
                    <li>
                        <img src="./images/logo-partner/facebook.31d5f92.png" alt="" />
                    </li>
                    <li>
                        <img src="./images/logo-partner/google.517da09.png" alt="" />
                    </li>
                    <li>
                        <img src="./images/logo-partner/netflix.e3ad953.png" alt="" />
                    </li>
                    <li>
                        <img src="./images/logo-partner/pandg.8b7310b.png" alt="" />
                    </li>
                    <li>
                        <img src="./images/logo-partner/paypal.ec56157.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
