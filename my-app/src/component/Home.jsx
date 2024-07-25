import React from "react";
import { Possibilities } from "./components/possibilities";
import { Enterprises } from "./components/enterprises";
import { Header } from "./header";
import { Footer } from "./components/footer";
import { Main } from "./components/main";
import "./styles/home.css"

const Home = () => {
    return (
        <main>
            <Header/>
            <Main/>
            <Possibilities/>
            <Enterprises/>
            <Footer/>
        </main>
    )
}

export default Home;