"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        const elements = document.querySelectorAll(".reveal");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Re-observe when route changes
    useEffect(() => {
        const timeout = setTimeout(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("visible");
                        }
                    });
                },
                { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
            );

            const elements = document.querySelectorAll(".reveal:not(.visible)");
            elements.forEach((el) => observer.observe(el));

            return () => observer.disconnect();
        }, 100);

        return () => clearTimeout(timeout);
    });

    return null;
}
