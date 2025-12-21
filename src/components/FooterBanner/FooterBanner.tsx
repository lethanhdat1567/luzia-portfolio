"use client";

import { images } from "@/assets/images";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function FooterBanner() {
    const bannerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (!bannerRef.current) return;

            const element = bannerRef.current;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Tính toán khi element vào viewport
            const elementTop = rect.top;
            const elementHeight = rect.height;

            // Khi element bắt đầu vào viewport (từ dưới lên)
            if (elementTop < windowHeight && elementTop > -elementHeight) {
                // Tính progress (0 -> 1) khi scroll qua element
                const progress =
                    (windowHeight - elementTop) /
                    (windowHeight + elementHeight);

                // Scale effect: phóng to từ 1 -> 1.2 khi scroll
                const newScale = 1 + progress * 0.2;
                setScale(Math.min(newScale, 1.2));
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={bannerRef}
            className="relative h-120 w-screen overflow-hidden"
        >
            <div
                style={{
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    transition:
                        "transform 0.1s ease-out, opacity 0.1s ease-out",
                }}
                className="h-full w-full bg-linear-to-br from-slate-700 to-slate-900"
            >
                {/* Placeholder - thay bằng Image component của bạn */}
                <div className="flex h-full w-full items-center justify-center text-2xl text-white">
                    <Image
                        src={images.banner}
                        className="h-full w-full object-cover"
                        alt="bds"
                    />
                </div>
            </div>
        </div>
    );
}

export default FooterBanner;
