"use client";

import { ReactNode, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Direction = "up" | "down" | "left" | "right" | "scale";

interface ScrollAnimateProps {
    children: ReactNode;
    direction?: Direction;
    duration?: number;
    delay?: number;
    threshold?: number; // 0-1
}

const directionVariants = (direction: Direction): Variants => {
    const distance = 50;
    switch (direction) {
        case "up":
            return {
                hidden: { opacity: 0, y: distance },
                visible: { opacity: 1, y: 0 },
            };
        case "down":
            return {
                hidden: { opacity: 0, y: -distance },
                visible: { opacity: 1, y: 0 },
            };
        case "left":
            return {
                hidden: { opacity: 0, x: distance },
                visible: { opacity: 1, x: 0 },
            };
        case "right":
            return {
                hidden: { opacity: 0, x: -distance },
                visible: { opacity: 1, x: 0 },
            };
        case "scale":
            return {
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            };
    }
};

export default function ScrollAnimate({
    children,
    direction = "up",
    duration = 0.8,
    delay = 0,
    threshold = 0.2,
}: ScrollAnimateProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [inViewRef, inView] = useInView({ threshold });
    const [hasAnimated, setHasAnimated] = useState(false);

    // merge refs
    const setRefs = (node: HTMLDivElement) => {
        ref.current = node;
        inViewRef(node);
    };

    // khi lần đầu inView = true, đánh dấu đã animate
    if (inView && !hasAnimated) {
        setHasAnimated(true);
    }

    return (
        <motion.div
            ref={setRefs}
            variants={directionVariants(direction)}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"} // chỉ animate 1 lần
            transition={{ duration, delay }}
        >
            {children}
        </motion.div>
    );
}
