import { serviceItems } from "@/app/(default)/(home)/components/Service/data";
import ServiceItem from "@/app/(default)/(home)/components/Service/ServiceItem";

function Service() {
    return (
        <div>
            <div className="app-container py-30">
                <div className="grid grid-cols-2">
                    <h3 className="text-xl font-medium text-neutral-600">
                        Khai thác & chọn lọc dự án
                    </h3>
                    <p className="text-3xl font-medium text-neutral-500">
                        Tôi liên tục cập nhật và sàng lọc các dự án, nhà phố và
                        đất nền{" "}
                        <strong className="text-black">
                            có pháp lý rõ ràng, vị trí tiềm năng và giá trị khai
                            thác lâu dài
                        </strong>
                        .
                    </p>
                </div>
                <div className="mt-14 grid grid-cols-3 gap-4">
                    {serviceItems.map((item) => (
                        <ServiceItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            tags={item.tags}
                            icon={item.icon}
                            theme={item.theme}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
