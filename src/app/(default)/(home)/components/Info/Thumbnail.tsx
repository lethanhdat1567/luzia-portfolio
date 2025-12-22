"use client";

import { useEffect, useState } from "react";
import Stack from "@/components/Stack";
import Image from "next/image";
import { images } from "@/assets/images";

const imagesData = [images.image1, images.image2, images.image3];

export default function Thumbnail() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []); // Chỉ render trên client

    if (!mounted) return null; // Tránh SSR mismatch

    return (
        <div className="hidden h-[600px] w-full lg:block">
            <Stack
                sensitivity={200}
                sendToBackOnClick={true}
                autoplay={true}
                cards={imagesData.map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt={`card-${i + 1}`}
                        draggable={false}
                        width={500}
                        height={1000}
                        className="h-full w-full object-cover"
                    />
                ))}
            />
        </div>
    );
}
