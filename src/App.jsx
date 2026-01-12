import React from 'react'
import {Navbar, Welcome, Dock} from './components/index.js'
import { Terminal, Safari, Resume } from '#Windows/index.js';
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
        </main>
    )
}
export default App
