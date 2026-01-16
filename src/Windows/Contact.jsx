import React from "react";
import WindowWrapper from "#hoc/windowWrapper.jsx";
import { socials } from "#constants/index.js";
import WindowControls from "#components/WindowControls.jsx";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls windowKey="contact" />
                <h2 className="text-gray-800 font-medium">Contact Me</h2>
            </div>

            <div className="p-5 space-y-5 bg-white">
                <img
                    src="/images/adrian.jpg"
                    alt="Adrian"
                    className="rounded-lg overflow-hidden h-20"
                />

                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Let&apos;s Connect</h3>
                    <p className="text-sm text-gray-600">
                        Got an idea? A bug to squash? Or just wanna talk tech? I&apos;m in.
                    </p>
                    <p>rakeshgm039@gmail.com</p>
                </div>

                <ul className="space-y-3">
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li
                            key={id}
                            style={{ backgroundColor: bg }}
                            className="rounded-lg overflow-hidden flex items-center justify-center"
                        >
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={text}
                                className="flex items-center gap-3 px-4 py-3 h-full w-full"
                            >
                                <img src={icon} alt={text} className="w-5 h-5" />
                                <p className="text-sm font-medium text-gray-900">{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
