"use client";

import { images } from "@/assets/images";
import Image from "next/image";
import { useEffect, useState } from "react";

function Banner() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Tính toán transform dựa trên scroll (rất nhẹ)
    const scale = 1 + scrollY * 0.00005; // Zoom in cực nhẹ
    const translateY = scrollY * 0.2; // Parallax rất nhẹ
    const opacity = 1 - scrollY * 0.0005; // Fade out chậm

    return (
        <div
            className="absolute bottom-0 left-1/2 h-[90vh] w-[65vw]"
            style={{
                transform: `translate(-50%, ${translateY}px) scale(${scale})`,
                transformOrigin: "center bottom",
                opacity: Math.max(opacity, 0),
                transition: "transform 0.1s ease-out",
            }}
        >
            <Image
                src={images.smallAvatar}
                alt="Le Thanh Dat"
                fill
                priority
                className="object-cover object-center"
            />
            {/* Fade blur effect ở dưới */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-white via-white/70 to-transparent" />
        </div>
    );
}

export default Banner;
