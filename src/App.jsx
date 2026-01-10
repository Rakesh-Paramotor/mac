import React from 'react'
import {Navbar, Welcome, Dock} from './components/index.js'
import Terminal from "/src/Windows/Terminal.jsx";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
        </main>
    )
}
export default App
