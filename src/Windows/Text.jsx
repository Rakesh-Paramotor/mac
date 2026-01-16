import React from "react";
import windowWrapper from "../hoc/windowWrapper";
import WindowControls from "../components/WindowControls";

const Text = ({ data }) => {
  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls windowKey="txtfile" />
        <h2 className="text-gray-800">{name}</h2>
      </div>
      <div className="text-window-content p-4 bg-white rounded-b-lg">
        {image && <img src={image} alt={name} className="w-full h-auto mb-4" />}
        <h1 className="text-2xl font-bold">{name}</h1>
        {subtitle && <h2 className="text-lg text-gray-500 mb-4">{subtitle}</h2>}
        {description &&
          description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
      </div>
    </>
  );
};

const TextWindow = windowWrapper(Text, "txtfile");
export default TextWindow;
