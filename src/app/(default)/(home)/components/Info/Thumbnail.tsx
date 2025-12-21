"use client";

import { images } from "@/assets/images";
import Stack from "@/components/Stack";
import Image from "next/image";

const imagesData = [images.banner, images.banner, images.banner, images.banner];

function Thumbnail() {
    return (
        <div className="hidden h-120 w-full lg:block">
            <Stack
                sensitivity={200}
                sendToBackOnClick={true}
                autoplay={true}
                randomRotation={true}
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

export default Thumbnail;
