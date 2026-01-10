import React, {useLayoutEffect, useRef} from 'react'
import useWindowStore from "#store/window.jsx";
import {useGSAP} from "@gsap/react";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const {focusWindow, window: windows} = useWindowStore();
        const {isOpen, zIndex} = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() =>{
            const el = ref.current;
            if(!el || !isOpen) return;

            el.style.display = "block";
        }, [isOpen])

        useLayoutEffect(() =>{
            const el = ref.current;
            if(!el ) return;
            el.style.display = isOpen ? "block" : "none"
        }, [isOpen])

        return (
            <section id={windowKey} ref={ref} style={{zIndex}} className="absolute">
            <Component {...props}/>
        </section>
        );
    };
    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`
    return Wrapped;
}
export default WindowWrapper
