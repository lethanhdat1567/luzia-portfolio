"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Target } from "lucide-react";
import Image from "next/image";
import { images } from "@/assets/images";
import { Autoplay } from "swiper/modules";

function ServiceItem() {
    return (
        <div className="rounded-xl border-2 border-white bg-[#F5F5EB] p-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-sm bg-black/10">
                <Target size={26} color="#0e3a27" />
            </span>
            <h3 className="my-3 text-xl font-medium">Business Strategy</h3>
            <p className="mb-6 text-sm">
                Crafting clear, actionable strategies that align with your
                vision, ensuring sustainable growth and a competitive edge.
            </p>
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="hover:cursor-grab"
            >
                <SwiperSlide>
                    <Image
                        className="h-50 w-full rounded-md object-cover"
                        src={images.banner}
                        width={500}
                        height={500}
                        alt="Fallback"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="h-50 w-full rounded-md object-cover"
                        src={images.banner}
                        width={500}
                        height={500}
                        alt="Fallback"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="h-50 w-full rounded-md object-cover"
                        src={images.banner}
                        width={500}
                        height={500}
                        alt="Fallback"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="h-50 w-full rounded-md object-cover"
                        src={images.banner}
                        width={500}
                        height={500}
                        alt="Fallback"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ServiceItem;
