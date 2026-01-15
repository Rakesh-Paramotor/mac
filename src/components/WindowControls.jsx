import React from 'react'
import useWindowStore from "#store/window.jsx";

const WindowControls = ({ windowKey }) => {
    const {closeWindow} = useWindowStore();

    return (
        <div id="window-controls" className="flex items-center space-x-2">
            <div className="close" onClick={() => closeWindow(windowKey)} />
           <div className="minimize">
           </div>
            <div className="maximize">
            </div>
        </div>
    )
}
export default WindowControls
