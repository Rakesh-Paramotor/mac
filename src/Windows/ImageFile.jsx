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
        <div className="bg-white">
            <div id="window-header">
                <WindowControls windowKey="imgfile" />
                <h2>{data.name}</h2>
            </div>
            <div className="p-4">
                <img src={data.imageUrl} alt={data.name} className="max-w-xl max-h-xl" />
            </div>
        </div>
    );
};

const ImageFileWindow = WindowWrapper(ImageFile, 'imgfile');
export default ImageFileWindow;
