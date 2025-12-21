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
        <div className="static h-[50vh] w-full sm:h-[80vh] xl:absolute xl:bottom-0 xl:left-1/2 xl:h-[90vh] xl:-translate-x-1/2">
            <div
                className="relative h-full w-full"
                style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    transformOrigin: "center bottom",
                    opacity: Math.max(opacity, 0),
                    transition: "transform 0.1s ease-out",
                }}
            >
                <div className="absolute bottom-0 h-full w-full">
                    <Image
                        src={images.model}
                        alt="Le Thanh Dat"
                        fill
                        priority
                        className="object-contain object-top"
                        sizes="(max-width: 768px) 100vw, 672px"
                    />
                    {/* Gradient mask overlay - MẠNH HƠN */}
                    <div
                        className="pointer-events-none absolute inset-0 blur-sm filter lg:blur-none"
                        style={{
                            background:
                                "linear-gradient(to top, white 0%, white 10%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.4) 35%, transparent 50%)",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
