"use client";

import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { useEffect, useState } from "react";

export default function Project() {
    const [mounted, setMounted] = useState(false);

    // Chỉ render animation trên client
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Tránh SSR mismatch

    return (
        <div className="relative bottom-20 left-12 z-10 xl:absolute">
            {/* Badge vùng */}
            <ScrollAnimate direction="down">
                <div className="md:text-md inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/80 px-4 py-1 text-sm text-amber-700 backdrop-blur-sm">
                    <span className="relative flex h-2.5 w-2.5">
                        {/* Ping animation */}
                        <span
                            className="absolute top-1/2 left-1/2 h-3 w-3 rounded-full bg-amber-400 opacity-0"
                            style={{
                                animation: "pingPulse 2s ease-out infinite",
                            }}
                        />
                        {/* Dot chính */}
                        <span className="relative h-2.5 w-2.5 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
                    </span>
                    Chuyên khu vực: Quận 6 (TP.HCM)
                </div>
            </ScrollAnimate>

            {/* Title */}
            <ScrollAnimate direction="down" delay={0.2}>
                <h1 className="mt-4 mb-6 max-w-4xl text-3xl font-medium text-gray-900 md:text-4xl xl:mb-0 xl:max-w-xl">
                    <span className="text-gold">Tuấn Phát</span> – Đồng hành
                    cùng bạn trong đầu tư và an cư bền vững
                </h1>
            </ScrollAnimate>

            {/* Styled-jsx animation */}
            <style jsx>{`
                @keyframes pingPulse {
                    0% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0.75;
                    }
                    30% {
                        transform: translate(-50%, -50%) scale(2.5);
                        opacity: 0;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(2.5);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
}
