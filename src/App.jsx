import React from 'react'
import {Navbar, Welcome, Dock} from './components/index.js'
import {Terminal, Safari, Resume, Finder, Text, ImageFile, Contact} from '#Windows/index.js';
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import Home from "#components/Home.jsx";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
            <Safari />
            <Resume />
            <Finder/>
            <Text />
            <ImageFile />
            <Contact />
            <Home />
        </main>
    )
}
export default App
