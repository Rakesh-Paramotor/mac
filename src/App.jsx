import React from 'react'
import {Navbar, Welcome, Dock} from './components/index.js'
import { Terminal, Safari } from '#Windows/index.js';
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
        </main>
    )
}
export default App
