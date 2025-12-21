"use client";

import { serviceItems } from "@/app/(default)/(home)/components/Service/data";
import ServiceItem from "@/app/(default)/(home)/components/Service/ServiceItem";

function Service() {
    return (
        <div className="bg-neutral-50 py-16 sm:py-20 lg:py-30">
            <div className="app-container">
                {/* Header */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 lg:gap-6">
                    <h3 className="text-lg font-medium text-neutral-600 sm:text-xl">
                        Hỗ trợ khai thác & chăm sóc khách hàng
                    </h3>
                    <p className="text-2xl font-medium text-neutral-500 sm:text-3xl">
                        Tôi hỗ trợ tìm kiếm và sàng lọc nguồn nhà, kết nối khách
                        hàng và{" "}
                        <strong className="text-black">
                            đảm bảo mọi thủ tục pháp lý diễn ra suôn sẻ
                        </strong>{" "}
                        để mang lại trải nghiệm dịch vụ chuyên nghiệp.
                    </p>
                </div>

                {/* Service Items Grid */}
                <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                    {serviceItems.map((item) => (
                        <ServiceItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            tags={item.tags}
                            icon={item.icon}
                            theme={item.theme}
                            subTitle={item.subtitle}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
