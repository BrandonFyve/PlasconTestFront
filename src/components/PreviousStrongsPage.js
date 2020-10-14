import React from "react";
import redPaint from "./assets/red_paint.png";
import block5 from "./assets/block_image_5.png";
import Footer from "./Footer";
import patternLg from "./assets/pattern_lg.png";

export const PreviousStrongsPage = () => {
    return (
        <div className="previous-strongs-page">
            <div className="red-paint-wrapper" data-aos="zoom-in-right" data-aos-duration="900">
                <img src={redPaint} alt="" className="red-paint" />
                <div className="prev-strongs-header-wrapper">
                    <h3 className="prev-strongs-header impacted-text text-white">PREVIOUS STRONGS</h3>
                </div>
            </div>
            <p className="text-center pt-3">
                Check out some of the beautiful{" "}
                <span className="text-bg-black">
                    <strong>strongs</strong>
                </span>{" "}
                that haev been sent up until now:
            </p>
            <div className="container">
                <div className="prev-strongs-wrapper">
                    <div className="prev-strongs-item">
                        <img src={block5} alt="" className="prev-strongs-item-img" />
                    </div>
                    <div className="prev-strongs-item">
                        <img src={block5} alt="" className="prev-strongs-item-img" />
                    </div>
                    <div className="prev-strongs-item">
                        <img src={block5} alt="" className="prev-strongs-item-img" />
                    </div>
                    <div className="prev-strongs-item">
                        <img src={block5} alt="" className="prev-strongs-item-img" />
                    </div>
                    <div className="prev-strongs-item">
                        <img src={block5} alt="" className="prev-strongs-item-img" />
                    </div>
                    <div className="prev-strongs-item">
                        <img src={block5} alt="" className="prev-strongs-item-img" />
                    </div>
                </div>
                <a className="button-red load-more-strongs-btn">
                    LOAD MORE <i className="fas fa-chevron-right text-light-green space-left"></i>
                </a>
            </div>
            <img src={patternLg} alt="" className="pattern-lg-send-strongs" />
            <Footer />
        </div>
    );
};

export default PreviousStrongsPage;
