import React from 'react'
import WindowControls from "#components/WindowControls.jsx";
import {Search} from "lucide-react";
import WindowWrapper from "#hoc/windowWrapper.jsx";
import useLocationStore from "#store/location.js";
import {locations} from "#constants/index.js";
import clsx from "clsx";

const Finder = () => {
    const {activeLocation, setActiveLocation} = useLocationStore();
    const renderList = (items, name) => (
        <div>
            <h3>{name}</h3>
            <ul>
            {items.map((item)=>(
        <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
                item.id === activeLocation.id ? "active" : "not-active",
            )}
        >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
        </li>
    ))}
            </ul>
            </div>
    );

    return <>
      <div id="window-header">
          <WindowControls  windowKey="finder"/>
          <Search className="icon"/>
      </div>
        <div className="bg-white flex h-full">
            <div className="sidebar">
                <div>
                    <h3>Favorites</h3>
                    <ul>
                        {renderList(Object.values(locations))}
                    </ul>
                    <div>
                        <h3>Work</h3>
                        <ul>
                            {renderList(locations.work.children)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}
const FinderWindow = WindowWrapper(Finder, 'finder');
export default FinderWindow;
