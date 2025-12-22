"use client";

import { servicesData } from "@/app/(default)/(home)/components/Service/data";
import ServiceItem from "@/app/(default)/(home)/components/Service/ServiceItem";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";

function Service() {
    return (
        <div className="bg-neutral-50 py-16 sm:py-20 lg:py-30">
            <div className="app-container">
                {/* Header */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 lg:gap-6">
                    <ScrollAnimate direction="right">
                        <h3 className="text-lg font-medium text-neutral-600 lg:text-xl">
                            Đồng hành cùng nhà đầu tư
                        </h3>
                    </ScrollAnimate>
                    <ScrollAnimate direction="left">
                        <p className="text-2xl font-medium text-neutral-500 lg:text-3xl">
                            Cung cấp nguồn nhà chất lượng, tư vấn chuẩn xác và{" "}
                            <strong className="text-black">
                                bảo chứng tính pháp lý
                            </strong>{" "}
                            cho từng bước đi vững chắc của khách hàng.
                        </p>
                    </ScrollAnimate>
                </div>

                {/* Service Items Grid */}
                <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service, index) => (
                        <ScrollAnimate
                            duration={0.6}
                            key={service.id}
                            direction="up"
                            delay={index * 0.15}
                        >
                            <ServiceItem
                                title={service.title}
                                desc={service.desc}
                                Icon={service.icon}
                            />
                        </ScrollAnimate>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
