import React, { Component } from "react";
import Body from "./Body/Body";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class MainComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default MainComponent;