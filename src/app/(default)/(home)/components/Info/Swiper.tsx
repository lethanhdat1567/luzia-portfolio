"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { imagesData } from "@/app/(default)/(home)/components/Info/data";

function SwiperWrapper() {
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
                        <img
                            src={img.src}
                            alt={`Slide ${index + 1}`}
                            className="h-auto w-full rounded-lg object-cover shadow-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperWrapper;
