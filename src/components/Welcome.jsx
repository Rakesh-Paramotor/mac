import React, { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const renderText = (text, className, baseWeight = 400) => {
    return text.split("").map((char, i) => (
        <span
            key={i}
            className={className}
            style={{
                fontVariationSettings: `'wght' ${baseWeight}`,
            }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
};

const FONT_WEIGHT = {
    subtitle: { min: 100, max: 400, defaultValue: 100 },
    title: { min: 100, max: 900, defaultValue: 400 },
};

const setupTextHover = (container, type) => {
    if (!container) return () => {};

    const letters = Array.from(container.querySelectorAll("span"));
    const { min, max, defaultValue: base } = FONT_WEIGHT[type];

    const animationLetters = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,
        });
    };

    const handleMouseMover = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 20000);

            animationLetters(letter, base + (max - min) * intensity);
        });
    };

    const handleMouseLeave = () => {
        letters.forEach((letter) => {
            animationLetters(letter, base, 0.5);
        });
    };

    container.addEventListener("mousemove", handleMouseMover);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMover);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(
        () => {
            gsap.from("#welcome", {
                duration: 1,
                opacity: 0,
                ease: "power2.out",
            });
        },
        [],
    );

    useLayoutEffect(() => {
        const cleanupTitle = setupTextHover(titleRef.current, "title");
        const cleanupSubtitle = setupTextHover(subtitleRef.current, "subtitle");

        return () => {
            cleanupTitle();
            cleanupSubtitle();
        };
    }, []);

    return (
        <section id="welcome">
            <p ref={subtitleRef}>
                {renderText(
                    "Hey, I'm Rakesh! Welcome to my",
                    "text-3xl font-georama",
                )}
            </p>
            <h1 ref={titleRef} className="mt-7">
                {renderText("portfolio", "text-9xl italic font-georama")}
            </h1>

            <div className="small-screen">
                <p>This portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    );
};

export default Welcome;
