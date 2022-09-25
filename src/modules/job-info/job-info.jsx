import React from 'react'
import { CheckIcon } from '../../components/icon/check-icon'

export default function JobInfo() {
    return (
        <div className="row">
            <div className="col-5">
                <h2 className="sub_title">A whole world of freelance talent at your fingertips</h2>
                <ul>
                    <li>
                        <h4 className="info-title">
                            <span className="icon">
                                <CheckIcon />
                            </span>
                            The best for every budget
                        </h4>
                        <p>
                            Find high-quality services at every price point. No hourly rates, just
                            project-based pricing.
                        </p>
                    </li>
                    <li>
                        <h4 className="info-title">
                            <span className="icon">
                                <CheckIcon />
                            </span>
                            Quality work done quickly
                        </h4>
                        <p>
                            Find the right freelancer to begin working on your project within
                            minutes.
                        </p>
                    </li>
                    <li>
                        <h4 className="info-title">
                            <span className="icon">
                                <CheckIcon />
                            </span>
                            Protected payments, every time
                        </h4>
                        <p>
                            Always know what you'll pay upfront. Your payment isn't released until
                            you approve the work.
                        </p>
                    </li>
                    <li>
                        <h4 className="info-title">
                            <span className="icon">
                                <CheckIcon />
                            </span>
                            24/7 support
                        </h4>
                        <p>
                            Questions? Our round-the-clock support team is available to help
                            anytime, anywhere.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="col-7">
                <img
                    className="img-fluid"
                    src="./images/thumbnail-feedbacks/selling-proposition-still-1400-x1.png"
                    alt=""
                />
            </div>
        </div>
    )
}