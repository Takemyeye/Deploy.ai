import React from "react"
import { EllementUnit } from "./ellementUnit"
import { TextUnit } from "./textUnit"
import "./styles/possibilities.css"

export function Enterprises () {

    return (
        <div className="possibilities">
            <TextUnit 
                h1="Unlock New Possibilities"
                h4="Leverage the power of AI to drive innovation and transform your business. Unlock new opportunities and stay ahead of the competition."/>
            <div className="ellement">
               <EllementUnit 
                    h2="Intelligent Automation" 
                    h3="Automate repetitive tasks and streamline your workflows with AI-powered solutions."/>
                <EllementUnit 
                    h2="Predictive Analytics" 
                    h3="Gain valuable insights and make data-driven decisions with AI-powered predictive analytics."/>
                <EllementUnit 
                    h2="Personalized Experiences" 
                    h3="Deliver personalized experiences to your customers with AI-powered recommendations and content optimization."/>
            </div>
        </div>
    )
}