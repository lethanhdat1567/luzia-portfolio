"use client";

import Masonry from "@/components/Masonry";

const baseImages = [
    "https://picsum.photos/id/1015/600/900",
    "https://picsum.photos/id/1011/600/750",
    "https://picsum.photos/id/1020/600/800",
    "https://picsum.photos/id/1005/600/850",
    "https://picsum.photos/id/1019/600/700",
];

const items = Array.from({ length: 12 }).map((_, index) => ({
    id: String(index),
    img: `${baseImages[index % baseImages.length]}?grayscale`,
    url: "#",
    height: 300 + (index % 4) * 120,
}));

function Gallery() {
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
    );
}

export default Gallery;
