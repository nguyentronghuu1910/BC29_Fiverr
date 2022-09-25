import React from 'react'
import './index.scss'

export default function Feedback() {
    return (
        <div>
            <div className="row">
                <div className="col-5">
                    <img
                        className="img-fluid thumb_fb"
                        src="./images/thumbnail-feedbacks/testimonial-video-still-lavender.jpg"
                        alt=""
                    />
                </div>
                <div className="col-7">
                    <div className="fb_content">
                        <h5>
                            Caitlin Tormey, Chief Commercial Officer
                            <span>
                                <img
                                    className="img-fluid"
                                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                                    alt=""
                                />
                            </span>
                        </h5>
                        <blockquote>
                            <i>
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                                beatae incidunt ab inventore eius quod fugiat debitis corporis vero
                                id quia ipsum perferendis consectetur, eveniet aliquam animi dolore
                                deleniti natus."
                            </i>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}
