"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { images } from "@/assets/images";
import { useEffect } from "react";
import Masonry from "@/components/Masonry";

type ModalProps = {
    open: boolean;
    onClose: () => void;
};

const items = [
    {
        id: "1",
        img: "https://picsum.photos/id/1015/600/900?grayscale",
        url: "https://example.com/one",
        height: 400,
    },
    {
        id: "2",
        img: "https://picsum.photos/id/1011/600/750?grayscale",
        url: "https://example.com/two",
        height: 250,
    },
    {
        id: "3",
        img: "https://picsum.photos/id/1020/600/800?grayscale",
        url: "https://example.com/three",
        height: 600,
    },
    // ... more items
];

function Modal({ open, onClose }: ModalProps) {
    const galleryImages = [
        images.feature,
        images.feature,
        images.feature,
        images.feature,
    ];

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div
            className={`fixed inset-0 z-99999999 transition-all duration-300 ${
                open
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
            }`}
        >
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                    open ? "opacity-100" : "opacity-0"
                }`}
            />

            {/* Content */}
            <div
                className={`relative z-10 mx-auto h-full w-full bg-white transition-all duration-300 ${
                    open
                        ? "translate-y-0 scale-100"
                        : "translate-y-6 scale-[0.98]"
                }`}
            >
                {/* Top bar */}
                <div className="mb-2 flex items-center justify-between border-b px-6 py-4">
                    <span className="text-md text-neutral-500">
                        {galleryImages.length} images
                    </span>

                    <button
                        onClick={onClose}
                        className="cursor-pointer rounded-full p-2 text-neutral-600 transition hover:bg-neutral-100"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content – bạn tự xử lý */}
                <div className="flex-1 px-10 pb-10">
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
                </div>
            </div>
        </div>
    );
}

export default Modal;
