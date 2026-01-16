import React from "react";
import windowWrapper from "../hoc/windowWrapper";
import WindowControls from "../components/WindowControls";

const Image = ({ data }) => {
    if (!data) return null;

    const { name, imgfile } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target='imgfile'/>
                <h2 className="text-gray-800">{name}</h2>
            </div>
            <div className="p-5 bg-white">
                {imgfile ? (
                    <div className="flex justify-center mb-4">
                        <img src={imgfile} alt={name} className="w-full h-auto max-h-[70vh] object-contain rounded" />
                    </div>
                ): null}
            </div>
        </>
    );
};

const ImageWindow = windowWrapper(Image, "imgfile");
export default ImageWindow;
