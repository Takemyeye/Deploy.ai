import React from "react"

    const img = {
        abstract: "img/abstract.png"
    }

export function Main () {

    return (
        <div className="main">
            <div className="leftPanel">
                <h1>Unleash the Power of AI for Your Business</h1>
                <h4>Deploy AI models seamlessly and scale your applications with ease. Unlock new possibilities and drive innovation.</h4>
                <div className="btnContainer">
                    <div className="btn">Get Started</div>
                    <div className="btn">Contact Sales</div>
                </div>
            </div>
            <div className="rightPanel">
                <img src={img.abstract} alt="eh" />
            </div>
        </div>
    )
}