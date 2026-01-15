import React, { useRef } from "react";
import useWindowStore from "#store/window.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, window: windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];

        const ref = useRef(null);

        useGSAP(
            () => {
                const el = ref.current;
                if (!el) return;

                if (isOpen) {
                    el.style.display = "inline-block"; // ✅ inline-block shrink wraps nicely
                    gsap.fromTo(
                        el,
                        { scale: 0.8, opacity: 0, y: 40 },
                        { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power1.out" }
                    );
                } else {
                    gsap.to(el, {
                        scale: 0.8,
                        opacity: 0,
                        y: 40,
                        duration: 0.2,
                        ease: "power1.in",
                        onComplete: () => {
                            el.style.display = "none";
                        },
                    });
                }
            },
            { scope: ref, dependencies: [isOpen] }
        );

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            const handle = el.querySelector("#window-header");

            const [instance] = Draggable.create(el, {
                trigger: handle || el,
                type: "x,y",
                onPress: () => focusWindow(windowKey),
            });

            return () => instance.kill();
        }, []);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{
                    zIndex,
                    display: "none",
                    top: 80,   // ✅ initial position so it doesn't start awkwardly
                    left: 80,
                }}
                className="absolute w-fit h-fit"
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${
        Component.displayName || Component.name || "Component"
    })`;

    return Wrapped;
};

export default WindowWrapper;
