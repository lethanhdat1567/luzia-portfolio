"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image, { StaticImageData } from "next/image";
import { Autoplay } from "swiper/modules";

type ServiceItemProps = {
    title: string;
    description: string;
    icon: React.ElementType;
    images: StaticImageData[];
};

function ServiceItem({
    title,
    description,
    icon: Icon,
    images,
}: ServiceItemProps) {
    return (
        <div className="rounded-xl border-2 border-white bg-gray-100 p-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-sm bg-black/5">
                <Icon size={26} color="#0e3a27" />
            </span>

            <h3 className="my-3 text-xl font-medium">{title}</h3>
            <p className="mb-6 text-sm">{description}</p>

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
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            className="h-50 w-full rounded-md object-cover"
                            src={img}
                            width={500}
                            height={500}
                            alt={title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ServiceItem;
