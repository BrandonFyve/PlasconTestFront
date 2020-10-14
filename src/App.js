import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import MapPage from "./components/MapPage";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={LandingPage} />
            {/* <Route path="/map" exact component={MapPage} /> */}
        </Router>
    );
}

export default App;
