import ServiceItem from "@/app/(default)/(home)/components/Service/ServiceItem";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { getSheetContent } from "@/lib/getSheetContent";

async function Service() {
    const content = await getSheetContent("Home");
    const serviceData = JSON.parse(content.service_list) || [];

    return (
        <div className="bg-neutral-50 py-16 sm:py-20 lg:py-30">
            <div className="app-container">
                {/* Header */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 lg:gap-6">
                    <ScrollAnimate direction="right">
                        <h3 className="text-lg font-medium text-neutral-800 lg:text-xl">
                            {content.service_title}
                        </h3>
                    </ScrollAnimate>
                    <ScrollAnimate direction="left">
                        <p className="text-2xl font-medium text-neutral-500 lg:text-3xl">
                            {content.service_desc}
                        </p>
                    </ScrollAnimate>
                </div>

                {/* Service Items Grid */}
                <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {serviceData.map((service: any, index: number) => (
                        <ScrollAnimate
                            duration={0.6}
                            key={service.id}
                            direction="up"
                            delay={index * 0.15}
                            threshold={0}
                        >
                            <ServiceItem
                                title={service.title}
                                desc={service.desc}
                                icon={service.icon}
                            />
                        </ScrollAnimate>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
