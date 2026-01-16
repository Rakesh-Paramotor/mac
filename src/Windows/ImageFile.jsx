import React from 'react';
import WindowWrapper from '#hoc/windowWrapper.jsx';
import useWindowStore from '#store/window.jsx';
import WindowControls from '#components/WindowControls.jsx';

const ImageFile = () => {
    const { window } = useWindowStore();
    const data = window.imgfile?.data;

    if (!data) {
        return null;
    }

    return (
        <div className="w-full h-full bg-black flex items-center justify-center">
            <div id="window-header" className="top-0 left-0 absolute">
                <WindowControls windowKey="imgfile" />
                <h2 className="text-white">{data.name}</h2>
            </div>
            <img src={data.imageUrl} alt={data.name} className="max-w-full max-h-full" />
        </div>
    );
};

const ImageFileWindow = WindowWrapper(ImageFile, 'imgfile');
export default ImageFileWindow;
