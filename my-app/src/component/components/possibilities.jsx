import React from "react"
import { EllementUnit } from "./ellementUnit"
import { TextUnit } from "./textUnit"
import "./styles/possibilities.css"


export function Possibilities () {

    return (
        <div className="possibilities">
            <TextUnit 
                h1="Effortless AI Deployment"
                h4="Streamline your AI deployment process with our intuitive platform. Seamlessly integrate AI models into your applications and scale with ease."/>
            <div className="ellement">
               <EllementUnit 
                    h2="Rapid Deployment" 
                    h3="Quickly integrate AI models into your applications with our easy-to-use platform"/>
                <EllementUnit 
                    h2="Scalable Infrastructure" 
                    h3="Automatically scale your AI infrastructure to meet changing demands."/>
                <EllementUnit 
                    h2="Seamless Integration" 
                    h3="Seamlessly integrate AI models into your existing applications and workflows."/>
            </div>
        </div>
    )
}