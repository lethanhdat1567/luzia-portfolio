"use client";

import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { convertDriveLinkToDirect } from "@/lib/upload";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";

type MeProps = {
    direction?: "left" | "right" | string;
    title: string;
    description: string[];
    image: string;
    index: number;
};

function Me({ direction = "left", title, description, image, index }: MeProps) {
    const isLeft = direction === "left";
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotateX(rotateX);
        setRotateY(rotateY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <ScrollAnimate direction={(index + 1) % 2 === 0 ? "left" : "right"}>
            <div className="app-container mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
                {/* Image */}
                <div
                    className={`col-span-1 lg:col-span-6 ${
                        isLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                    <div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="group relative h-120 w-full overflow-hidden rounded-3xl ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:ring-amber-500/20"
                        style={{
                            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
                            transition: "transform 0.1s ease-out",
                        }}
                    >
                        <Image
                            // src={convertDriveLinkToDirect(image) || ""}
                            src={image}
                            alt={title}
                            fill
                            priority
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-amber-900/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                </div>

                {/* Text */}
                <div
                    className={`col-span-1 lg:col-span-6 ${
                        isLeft ? "lg:order-2" : "lg:order-1"
                    } flex flex-col justify-center`}
                >
                    <h1 className="mb-4 text-center text-xl font-medium tracking-tighter text-black sm:text-2xl lg:text-left lg:text-4xl">
                        {title}
                    </h1>

                    {description.map((desc, i) => (
                        <p
                            key={i}
                            className="my-1.5 text-center text-base text-neutral-700 sm:text-lg lg:text-left"
                        >
                            {desc}
                        </p>
                    ))}
                </div>
            </div>
        </ScrollAnimate>
    );
}

export default Me;
