"use client";

import { images } from "@/assets/images";
import { Trophy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function Blog() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative h-full w-full cursor-pointer overflow-hidden rounded-4xl bg-neutral-100 p-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="flex items-center gap-4 text-3xl font-bold">
                W. <Trophy size={26} color="#FFD41D" />
            </span>
            <h2 className="mt-2 text-xl font-medium">Awwwards Nominee</h2>
            <p className="font-xs mt-2 text-neutral-500">
                Recognized for excellence in web design and innovative digital
                experiences.
            </p>

            <div
                className="mt-4 transition-transform duration-500 ease-out"
                style={{
                    transform: isHovered
                        ? "translateY(-100px)"
                        : "translateY(0)",
                }}
            >
                <Image
                    src={images.blog}
                    alt="blog"
                    className="w-full rounded-xl"
                />
            </div>
        </div>
    );
}

export default Blog;
