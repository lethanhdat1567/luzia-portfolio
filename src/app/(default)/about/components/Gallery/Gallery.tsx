"use client";

import { imagesLayout } from "@/app/(default)/about/components/Gallery/data";
import GalleryImage from "@/app/(default)/about/components/Gallery/GalleryImage";
import {
    getHintClass,
    getScaleClass,
} from "@/app/(default)/about/components/Gallery/helpers";
import Modal from "@/app/(default)/about/components/Gallery/Modal";
import OverlayHint from "@/app/(default)/about/components/Gallery/OverlayHint";
import { Eye, Images } from "lucide-react";
import { useState } from "react";

function Gallery() {
    const [isHovering, setIsHovering] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <section className="py-10">
            <div className="app-container space-y-4">
                {/* Header hint */}
                <div
                    className={`text-center transition-all duration-300 ${getHintClass(
                        isHovering,
                    )}`}
                >
                    <p className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Eye size={16} />
                        Click to view full gallery
                    </p>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => setOpen(true)}
                >
                    <OverlayHint isHovering={isHovering} />

                    <div className="grid cursor-pointer grid-cols-1 gap-2 md:grid-cols-12">
                        {imagesLayout.map((item, i) => (
                            <GalleryImage
                                key={i}
                                {...item}
                                priority={i === 0}
                                scaleClass={getScaleClass(isHovering)}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom hint */}
                <div
                    className={`pt-2 text-center transition-all duration-300 ${
                        isHovering
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                    }`}
                >
                    <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <Images size={14} />2 images available
                    </p>
                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)} />
        </section>
    );
}

export default Gallery;
