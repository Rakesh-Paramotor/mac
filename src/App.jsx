import React from 'react'
import {Navbar, Welcome, Dock} from './components/index.js'
import {Terminal, Safari, Resume, Finder, Text, ImageFile} from '#Windows/index.js';
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
            <Safari />
            <Resume />
            <Finder/>
            <Text />
            <ImageFile />
        </main>
    )
}
export default App
