import React, { useEffect, useState } from "react";
import strongLogo from "./assets/strong_logo_lg.png"; //
import "./LandingPage.css";
import "./HeroPage";
import "./SendStrongsPage";
import "./MapPage";
import divider from "./assets/divider.png"; //
import SliderPage from "react-slider-page";
import block1 from "./assets/block_image_1.png"; //
import block2 from "./assets/block_image_2.png"; //
import block3 from "./assets/block_image_3.png"; //
import block4 from "./assets/block_image_4.png"; //
import block5 from "./assets/block_image_5.png"; //
import redPaint from "./assets/red_paint.png"; //
import strongIcon from "./assets/we_are_strong_icon.png"; //
import Footer from "./Footer"; //
import HeroPage from "./HeroPage";
import SendStrongsPage from "./SendStrongsPage";
import MapPage from "./MapPage";
import PreviousStrongsPage from "./PreviousStrongsPage";

export const LandingPage = () => {
    const [desktop, setDesktop] = useState(true);

    useEffect(() => {
        var width = window.innerWidth;
        // if (width > 800) {               //!CHECK THESE
        //     setDesktop(true);
        // } else {
        //     setDesktop(false);
        // }

        if (window.innerWidth <= 800) {
            setDesktop(false);
        }

        function handleResize() {
            // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
            console.log("changed");
            // if (window.innerWidth > 800) {
            //     setDesktop(true);
            // } else {
            //     setDesktop(false);
            // }

            if (window.innerWidth <= 800) {
                setDesktop(false);
            }
        }

        window.addEventListener("resize", handleResize);
    });

    return (
        <div>
            {desktop ? (
                <div>
                    <HeroPage />
                    {/* <div className="upper-banner">
                        <div className="container">
                            <div className="center-content">
                                <h3 className="reenie-text text-white">JOIN THE MOVEMENT</h3>
                                <div className="landing-logo-wrapper">
                                    <img src={strongLogo} alt="" className="strong-logo-landing" />
                                </div>
                            </div>
                            <div className="light-text def-text">
                                <p>
                                    <em>
                                        <strong>South African Strong</strong> [ˌsaʊθ ˈafrɪk(ə)n strɒŋ/
                                    </em>
                                    <br />
                                    <strong>adjective:</strong> having the resillience and courage to
                                    withstand the most difficult situations and still crack a smile and a
                                    joke.
                                </p>
                            </div>
                            <div className="text-white def-text-lower">
                                <p>
                                    <strong>#VibeCheck:</strong> It’s been a tough year. Let’s paint South
                                    Africa strong by using <strong>#SouthAfricanStrong</strong> everywhere,
                                    and sending strongs below:
                                </p>
                            </div>
                            <div className="btn-send-wrapper-home">
                                <a className="button-red">
                                    SEND STRONGS NOW{" "}
                                    <i className="fas fa-chevron-right text-light-green space-left"></i>
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <SendStrongsPage />
                    {/* <div className="send-strongs-wrapper">
                        <div className="send-strongs-divider">
                            <img src={divider} alt="" />
                            <h1 className="impacted-text send-strongs-text">SEND STRONGS</h1>
                        </div>
                        <div className="send-strongs-reminder">
                            <h4 className="reenie-text text-white">YOU CAN SEND STRONGS EVERY DAY!</h4>
                        </div>
                        <img src={strongIcon} alt="" className="strong-icon" />
                        <div className="container">
                            <div className="edit-strongs-wrapper">
                                <div className="strongs-left-column">
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
                                            <li>Send your strongs</li>
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
                                <div className="strongs-right-column">
                                    <div className="image-block-lg">
                                        <img src={block5} alt="" />
                                    </div>
                                </div>
                                <div className="btn-upload-wrapper">
                                    <a className="button-green">
                                        OR UPLOAD YOUR OWN IMAGE{" "}
                                        <i className="fas fa-chevron-right text-light-green space-left"></i>
                                    </a>
                                </div>
                                <div className="btn-send-wrapper">
                                    <a className="button-red">
                                        SEND STRONGS NOW{" "}
                                        <i className="fas fa-chevron-right text-light-green space-left"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div> */}
                    <MapPage />
                    {/* <div className="map-page">
                        <h1 className="map-placeholder impacted-text">MAP HERE</h1>
                    </div> */}
                    {/* <div className="previous-strongs-page">
                        <div className="red-paint-wrapper">
                            <img src={redPaint} alt="" className="red-paint" />
                            <h3 className="prev-strongs-header impacted-text text-white">PREVIOUS STRONGS</h3>
                        </div>
                        <p className="text-center pt-3">
                            Check out some of the beautiful strongs that haev been sent up until now
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
                        <Footer />
                    </div> */}
                    <PreviousStrongsPage />
                </div>
            ) : (
                <div>
                    <HeroPage />
                    <SendStrongsPage />
                    <MapPage />
                    <PreviousStrongsPage />
                </div>
            )}
        </div>
    );
};

export default LandingPage;
