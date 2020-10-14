import React from "react";
import "./Footer.css";
import bucket from "./assets/plascon_bucket.png";
import label from "./assets/new_label.png";
import polycell from "./assets/polycell.png";
import pattern from "./assets/pattern.png";

export const Footer = () => {
    return (
        <div>
            <div className="footer-wrapper">
                {/* <img src={pattern} alt="" className="pattern" /> */}
                <div className="container">
                    <div className="footer-inner">
                        <div className="bucket-wrapper">
                            <img src={bucket} alt="" className="paint-bucket" />
                            <img src={label} alt="" className="label-img" />
                        </div>
                        <div className="footer-text text-white">
                            <p>
                                Powered by <strong>NEW Plascon Micatex </strong>
                            </p>
                            <img src={polycell} alt="" className="polycell" />
                            <p className="footer-float-2">
                                , inspired by the <strong>Strength of South Africans.</strong>
                            </p>
                        </div>
                        <div className="arrow-btn-wrapper">
                            <a className="arrow-btn">VISIT THE PLASCON WEBSITE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
