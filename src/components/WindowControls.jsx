import React from 'react'
import useWindowStore from "#store/window.jsx";
import {Minus, Square, X} from "lucide-react";

const WindowControls = ({ windowKey }) => {
    const {closeWindow} = useWindowStore();

    return (
        <div id="window-controls" className="flex items-center space-x-2">
            <div className="close flex items-center justify-center" onClick={() => closeWindow(windowKey)}>
                <X size={12} color="black" />
            </div>
           <div className="minimize flex items-center justify-center">
                <Minus size={12} color="black" />
           </div>
            <div className="maximize flex items-center justify-center">
                <Square size={12} color="black" />
            </div>
        </div>
    )
}
export default WindowControls
