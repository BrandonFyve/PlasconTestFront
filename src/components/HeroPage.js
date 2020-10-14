import React from "react";
import strongLogo from "./assets/strong_logo_lg.png";
import patternLg from "./assets/pattern_lg.png";

export const HeroPage = () => {
    return (
        <div className="upper-banner">
            <img src={patternLg} alt="" className="pattern-lg-hero" />
            <div className="container">
                <div className="center-content">
                    <h3 className="reenie-text text-white">JOIN THE MOVEMENT</h3>
                    <div className="landing-logo-wrapper">
                        <h1 class="impacted-text header-lg text-white">#SouthAfricanStrong</h1>
                    </div>
                </div>
                <div className="light-text def-text">
                    <p>
                        <em>
                            <strong>South African Strong</strong> [ˌsaʊθ ˈafrɪk(ə)n strɒŋ/
                        </em>
                        <br />
                        <strong>adjective:</strong> having the resillience and courage to withstand the most
                        difficult situations and still crack a smile and a joke.
                    </p>
                </div>

                {/* <div className="btn-send-wrapper-home">
                        <a className="button-red">
                            SEND STRONGS NOW{" "}
                            <i className="fas fa-chevron-right text-light-green space-left"></i>
                        </a>
                    </div> */}
            </div>
        </div>
    );
};

export default HeroPage;
