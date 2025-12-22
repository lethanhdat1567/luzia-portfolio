"use client";

import { useEffect, useState } from "react";
import Stack from "@/components/Stack";
import Image from "next/image";
import { getSheetContent } from "@/lib/getSheetContent";
import { convertDriveLinkToDirect } from "@/lib/upload";

export default function Thumbnail() {
    const [mounted, setMounted] = useState(false);
    const [imagesData, setImagesData] = useState([]);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const http = async () => {
            const content = await getSheetContent("Home");
            setImagesData(JSON.parse(content.about_images));
        };

        http();
    }, []);

    if (!mounted) return null;

    return (
        <div className="hidden h-150 w-full lg:block">
            <Stack
                sensitivity={200}
                sendToBackOnClick={true}
                autoplay={true}
                cards={imagesData.map((src, i) => (
                    <Image
                        key={i}
                        src={convertDriveLinkToDirect(src) || ""}
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
