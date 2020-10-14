import React from "react";
import { useEffect } from "react";
import divider from "./assets/divider.png";
import strongIcon from "./assets/we_are_strong_icon.png";
import block1 from "./assets/block_image_1.png";
import block2 from "./assets/block_image_2.png";
import block3 from "./assets/block_image_3.png";
import block4 from "./assets/block_image_4.png";
import block5 from "./assets/block_image_5.png";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import patternLg from "./assets/pattern_lg.png";

export const SendStrongsPage = () => {
    useEffect(() => {
        AOS.init();
    });

    return (
        <div className="send-strongs-wrapper">
            <div className="send-strongs-divider">
                <img src={divider} alt="" />
                <h1 className="impacted-text send-strongs-text">
                    Share <span className="text-bg-black">strongs</span> now
                </h1>
            </div>
            <div className="bg-green">
                <div className="container relative-wrapper">
                    <div className="reminder-icon-wrapper">
                        <div className="strongs-reminder-wrapper">
                            <div className="text-white def-text-lower">
                                <p>
                                    <strong>#VibeCheck:</strong> It’s been a tough year. Let’s paint South
                                    Africa strong by using <strong>#SouthAfricanStrong</strong> everywhere,
                                    and sending{" "}
                                    <span className="text-bg-black">
                                        <strong>strongs</strong>
                                    </span>{" "}
                                    below:
                                </p>
                            </div>

                            <div className="send-strongs-reminder">
                                <h4 className="reenie-text text-white">YOU CAN SEND STRONGS EVERY DAY!</h4>
                            </div>
                        </div>
                        <div>
                            <img src={strongIcon} alt="" className="strong-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="edit-strongs-wrapper">
                    <div className="send-strongs-cols-wrapper">
                        <div className="strongs-left-column" data-aos="fade-right" data-aos-duration="600">
                            <p className="text-white">
                                This week we're celebrating{" "}
                                <span className="text-light-green">
                                    <strong>strong South African women</strong>
                                </span>
                            </p>
                            <div className="edit-strongs-instructions">
                                <ol className="text-white">
                                    <li>Choose an image below</li>
                                    <li>Edit your text to the right</li>
                                    <li>
                                        Send your{" "}
                                        <span className="text-bg-black">
                                            <strong>strongs</strong>
                                        </span>
                                    </li>
                                </ol>
                            </div>
                            <div className="image-block-wrapper">
                                <div className="image-block">
                                    <img src={block1} alt="" />
                                </div>
                                <div className="image-block">
                                    <img src={block2} alt="" />
                                </div>
                                <div className="image-block">
                                    <img src={block3} alt="" />
                                </div>
                                <div className="image-block">
                                    <img src={block4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="strongs-right-column"
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration="600"
                        >
                            <div className="image-block-lg">
                                <img src={block5} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="btn-upload-wrapper">
                        <a className="button-green">
                            OR UPLOAD YOUR OWN IMAGE{" "}
                            <i className="fas fa-chevron-right text-light-green space-left"></i>
                        </a>
                    </div> */}
                    <div className="btn-send-wrapper" data-aos="fade-right" data-aos-duration="600">
                        <a className="button-red">
                            SEND STRONGS NOW{" "}
                            <i className="fas fa-chevron-right text-light-green space-left"></i>
                        </a>
                    </div>
                </div>
            </div>
            <img src={patternLg} alt="" className="pattern-lg-send-strongs" />
            <Footer />
        </div>
    );
};

export default SendStrongsPage;
