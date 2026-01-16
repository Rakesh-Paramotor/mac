import React from "react";
import { locations } from "#constants/index.js";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "#store/window.jsx";
import useLocationStore from "#store/location.js";

gsap.registerPlugin(Draggable);

const Home = () => {
    const { openWindow } = useWindowStore();
    const { setActiveLocation } = useLocationStore();

    const projects = locations.work?.children ?? [];

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    };

    useGSAP(() => {
        Draggable.create(".folder", {
            type: "x,y",
            dragClickables: true,
        });
    }, []);

    return (
        <section id="home">
            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className={clsx("group folder cursor-default select-none", project.windowPosition)}
                        onDoubleClick={() => handleOpenProjectFinder(project)} // ✅ Mac-like open
                    >
                        <img src="/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Home;
