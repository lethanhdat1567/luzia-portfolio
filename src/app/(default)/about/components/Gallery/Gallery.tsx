"use client";

import { useEffect, useState } from "react";
import Masonry from "@/components/Masonry";
import { getSheetContent } from "@/lib/getSheetContent";
import { convertDriveLinkToDirect } from "@/lib/upload";

type GalleryItem = {
    id: string;
    img: string;
    url: string;
    height: number;
};

export default function Gallery() {
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGallery() {
            try {
                const content = await getSheetContent("About");
                const gallery: string[] = JSON.parse(content.gallery || "[]");

                const galleryItems: GalleryItem[] = gallery
                    .map((link, index) => {
                        const img = convertDriveLinkToDirect(link);
                        if (!img) return null;
                        return {
                            id: String(index),
                            img,
                            url: "#",
                            height: 300 + (index % 4) * 120,
                        };
                    })
                    .filter((item): item is GalleryItem => Boolean(item));

                setItems(galleryItems);
            } catch (err) {
                console.error("Failed to fetch gallery:", err);
                setItems([]);
            } finally {
                setLoading(false);
            }
        }

        fetchGallery();
    }, []);

    console.log(items);

    if (loading)
        return (
            <div className="py-30 text-center text-gray-500">
                Loading gallery...
            </div>
        );

    if (!items.length)
        return (
            <div className="py-30 text-center text-gray-500">
                Không có hình ảnh nào.
            </div>
        );

    return (
        <div className="py-30">
            <div className="app-container text-center">
                <h2 className="mb-4 text-2xl font-semibold">
                    Những khoảnh khắc đáng nhớ
                </h2>
                <p className="text-md mb-10">
                    Những hình ảnh đời thường và hoạt động giúp bạn hiểu thêm về
                    con người và hành trình của tôi.
                </p>
            </div>
            <div className="min-h-screen w-screen overflow-y-scroll px-10">
                {items.length > 0 && (
                    <Masonry
                        items={items}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={false}
                    />
                )}
            </div>
        </div>
    );
}
