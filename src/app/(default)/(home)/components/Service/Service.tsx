import ServiceItem from "@/app/(default)/(home)/components/Service/ServiceItem";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { getSheetContent } from "@/lib/getSheetContent";

async function Service() {
    const content = await getSheetContent("Home");
    const serviceData = JSON.parse(content.service_list) || [];

    return (
        <div className="bg-[#ecebe4] py-16 sm:py-20 lg:py-30">
            <div className="px-30">
                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="mb-4 text-3xl font-semibold text-neutral-800">
                        Nghiên cứu Khoa học
                    </h2>
                    <p className="max-w-4xl text-sm font-medium text-neutral-500 lg:text-3xl">
                        Những năng lực cốt lõi tạo nên phong cách làm việc của
                        tôi.
                    </p>
                </div>

                {/* Service Items Grid */}
                <div className="mt-14 grid grid-cols-2 gap-4">
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                </div>
            </div>
        </div>
    );
}

export default Service;
