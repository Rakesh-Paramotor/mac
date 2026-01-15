import React from "react";
import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/windowWrapper.jsx";
import {
    PanelLeft,
    ChevronLeft,
    ChevronRight,
    ShieldHalf,
    Share,
    Plus,
    Copy,
    Search,
    MoveRight,
} from "lucide-react";
import { blogPosts } from "#constants/index.js";

const Safari = () => {
    return (
        <div className="w-[780px] max-w-[780px] overflow-hidden bg-white rounded-2xl">
            {/* HEADER */}
            <div
                id="window-header"
                className="w-full flex items-center px-4 py-2 border-b"
            >
                {/* LEFT */}
                <div className="flex items-center gap-3 shrink-0">
                    <WindowControls windowKey="safari" />
                    <PanelLeft className="icon" />

                    <div className="flex items-center gap-1 ml-2">
                        <ChevronLeft className="icon" />
                        <ChevronRight className="icon" />
                    </div>
                </div>

                {/* ✅ Spacer between left and center */}
                <div className="w-4" />

                {/* CENTER (make it grow but limit max width) */}
                <div className="flex items-center gap-2 flex-1 max-w-[460px]">
                    <ShieldHalf className="icon shrink-0" />

                    <div className="flex items-center gap-2 flex-1 px-3 py-1 rounded-md border bg-white">
                        <Search className="icon shrink-0" />
                        <input
                            type="text"
                            placeholder="Search or enter website name"
                            className="w-full bg-transparent outline-none text-sm"
                        />
                    </div>
                </div>

                {/* ✅ GAP between search bar and right icons */}
                <div className="w-10" />

                {/* RIGHT */}
                <div className="flex items-center gap-4 shrink-0">
                    <Share className="icon" />
                    <Plus className="icon" />
                    <Copy className="icon" />
                </div>
            </div>

            {/* BODY */}
            <div className="w-full px-10 pt-10 pb-6">
                <h2 className="text-3xl font-bold text-pink-600 mb-10">
                    My Developer Blog
                </h2>

                <div className="space-y-12">
                    {blogPosts.map(({ id, image, title, date, link }) => (
                        <div key={id} className="grid grid-cols-5 gap-6 items-start">
                            {/* IMAGE */}
                            <div className="col-span-1 flex justify-center">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-14 h-14 object-contain"
                                />
                            </div>

                            {/* TEXT */}
                            <div className="col-span-4">
                                <p className="text-gray-400 text-sm mb-2">{date}</p>

                                <h3 className="text-[15px] font-semibold text-gray-900 leading-6 max-w-[520px]">
                                    {title}
                                </h3>

                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center gap-2 text-blue-500 text-sm"
                                >
                                    Check out the full post
                                    <MoveRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
