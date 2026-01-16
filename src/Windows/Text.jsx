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
      <div className="p-5 bg-white rounded-b-lg h-96 overflow-y-auto">
        {image && (
          <div className="flex justify-center mb-4">
            <img src={image} alt={name} className="max-h-48" />
          </div>
        )}
        <p className="text-2xl font-bold mb-2">{name}</p>
        {subtitle && <p className="text-lg text-gray-500 mb-4">{subtitle}</p>}
        {description &&
          description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-800">
              {paragraph}
            </p>
          ))}
      </div>
    </>
  );
};

const TextWindow = windowWrapper(Text, "txtfile");
export default TextWindow;
