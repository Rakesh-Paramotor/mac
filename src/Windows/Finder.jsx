import React from "react";
import clsx from "clsx";
import WindowControls from "#components/WindowControls.jsx";
import { Search } from "lucide-react";
import { locations } from "#constants/index.js";
import WindowWrapper from "#hoc/windowWrapper.jsx";
import useLocationStore from "#store/location.js";
import useWindowStore from "#store/window.jsx";

const Finder = () => {
    const { activeLocation, setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();

    const openItem = (item) => {
        // folder navigation
        if (item.kind === "folder") {
            setActiveLocation(item);
            return;
        }

        // pdf opens resume window
        if (item.fileType === "pdf") {
            openWindow("resume");
            return;
        }

        // external link -> open in new tab
        if (["fig", "url"].includes(item.fileType) && item.href) {
            window.open(item.href, "_blank");
            return;
        }

        // open internal window (must exist in WINDOW_CONFIG)
        openWindow(`${item.fileType}${item.id}`, item);
    };

    const renderList = (name, items) => (
        <div className="mb-6">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                {name}
            </h3>

            <ul className="space-y-1">
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(
                            "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1",
                            item.id === activeLocation?.id ? "bg-gray-200" : "hover:bg-gray-100"
                        )}
                    >
                        <img src={item.icon} className="w-4 h-4" alt={item.name} />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div id="window-header">
                <WindowControls windowKey="finder" />
                <Search className="icon" />
            </div>

            <div className="bg-white flex h-[520px] w-[760px] overflow-hidden rounded-b-2xl">
                {/* Sidebar */}
                <div className="w-[240px] border-r border-gray-200 p-3">
                    {renderList("Favorites", Object.values(locations))}
                    {renderList("Work", locations.work.children)}
                </div>

                {/* Content */}
                <ul className="flex-1 p-4 grid grid-cols-4 gap-4">
                    {activeLocation?.children?.map((item) => (
                        <li
                            key={item.id}
                            className={clsx("cursor-pointer select-none", item.position)}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} className="w-12 h-12 mx-auto" />
                            <p className="mt-2 text-center text-xs truncate">{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
