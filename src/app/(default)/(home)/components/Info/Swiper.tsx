"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import { getSheetContent } from "@/lib/getSheetContent";
import { convertDriveLinkToDirect } from "@/lib/upload";
import Image from "next/image";

function SwiperWrapper() {
    const [imagesData, setImagesData] = useState([]);

    useEffect(() => {
        const http = async () => {
            const content = await getSheetContent("Home");
            setImagesData(JSON.parse(content.about_images));
        };

        http();
    }, []);

    if (imagesData.length <= 0) return;

    console.log(imagesData);

    return (
        <div className="w-full lg:hidden">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
                {imagesData.map((img, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <Image
                            src={convertDriveLinkToDirect(img) || ""}
                            alt={`Slide ${index + 1}`}
                            className="h-full w-full rounded-lg object-cover shadow-lg"
                            width={600}
                            height={500}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperWrapper;
