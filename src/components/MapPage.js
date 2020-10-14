import React from "react";
import staticMap from "./assets/static_map.png";
import mapPaintStreak from "./assets/map_paint_streak.png";
import { useEffect } from "react";
import Particles from "react-particles-js";
import divider from "./assets/divider.png";
import redPaint from "./assets/red_paint_small.png";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroListing from "./HeroListing.js";
import FeedItem from "./FeedItem";

// let data = {};

function getFeed() {
    axios.get("http://localhost:5000/feed").then((res) => {
        let data = res.data;
        console.log(data);
    });
}

export const MapPage = () => {
    useEffect(() => {
        getFeed();
        AOS.init();
    });

    return (
        <div className="map-page">
            {/* <Particles
                params={{
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 750,
                            },
                        },
                        color: {
                            value: "#ffffff",
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000",
                            },
                            polygon: {
                                nb_sides: 5,
                            },
                            image: {
                                src: "img/github.svg",
                                width: 100,
                                height: 100,
                            },
                        },
                        opacity: {
                            value: 1,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 0.3248308849205381,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 2,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.7,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 3.206824121731046,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble",
                            },
                            onclick: {
                                enable: true,
                                mode: "push",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 182.71737276780266,
                                size: 7,
                                duration: 2,
                                opacity: 0.7065071747021703,
                                speed: 3,
                            },
                            repulse: {
                                distance: 56.84540486109416,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            /> */}
            <div className="map-divider" data-aos="fade-right" data-aos-duration="800" data-aos-delay="600">
                <img src={divider} alt="" />
                <h1 className="impacted-text map-divider-text">See SA painted strong!</h1>
            </div>

            <div className="map-page-content-wrapper">
                <div className="map-page-text-wrapper" data-aos="zoom-in-right" data-aos-duration="800">
                    <p className="text-white">
                        Watch the{" "}
                        <span className="text-bg-black">
                            <strong>strongs</strong>
                        </span>{" "}
                        <strong>sweep across SA!</strong>
                    </p>
                    <div className="join-movement-text-wrapper">
                        <img src={redPaint} alt="" className="red-paint-small-desktop" />
                        <h3 className="text-white reenie-text join-movement-text">JOIN THE MOVEMENT?</h3>
                    </div>
                    <div className="send-strongs-inst-wrapper">
                        <ol className="send-strongs-inst-list text-white">
                            <li>
                                <p className="text-white">
                                    Use the hashtag{" "}
                                    <strong>#SouthAfricanStrong anywhere and everywhere</strong>
                                </p>
                            </li>
                            <li>
                                <p className="text-white">
                                    Send a strong <strong>here</strong>
                                </p>
                            </li>
                        </ol>
                        <p className="text-white">
                            <strong>
                                <em>Let's paint South Africa with positivity!</em>
                            </strong>
                        </p>
                    </div>
                </div>
                <div
                    className="map-img-wrapper"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    data-aos-duration="800"
                >
                    <img src={mapPaintStreak} alt="" className="map-paint-streak-img" />
                    <img src={staticMap} alt="" className="map-img" />
                </div>
                <div className="feeds-wrapper" data-aos="zoom-in-left" data-aos-duration="800">
                    <div className="leaderboard-wrapper">
                        <h4 className="impacted-text text-white">Strongs Heroes</h4>
                        <HeroListing />
                        <HeroListing />
                        <HeroListing />
                        <HeroListing />
                        <HeroListing />
                        <HeroListing />
                        <HeroListing />
                        <HeroListing />
                    </div>
                    <div className="feed-wrapper">
                        <FeedItem postType="tweet" message="Show us your #SouthAfricanStrong" />
                        <FeedItem postType="strong" from="Natalie Jacobs" to="Erin Hunter" />
                        <FeedItem postType="tweet" message="Show us your #SouthAfricanStrong" />
                        <FeedItem postType="tweet" message="Show us your #SouthAfricanStrong" />
                        <FeedItem postType="strong" from="Natalie Jacobs" to="Erin Hunter" />
                        <FeedItem postType="strong" from="Natalie Jacobs" to="Erin Hunter" />
                    </div>
                </div>
            </div>

            {/* <div className="container"> */}
            {/* <div className="map-img-wrapper">
                <img src={mapPaintStreak} alt="" className="map-paint-streak-img" />
                <img src={staticMap} alt="" className="map-img" />
            </div> */}
            {/* </div> */}
        </div>
    );
};

export default MapPage;
