import React from "react";
import { Header } from "./header";
import "./styles/home.css"
import { Main } from "./components/main";

const Home = () => {
    return (
        <main>
            <Header/>
            <Main/>
        </main>
    )
}

export default Home;