import SwiperWrapper from "@/app/(default)/(home)/components/Info/Swiper";
import Thumbnail from "@/app/(default)/(home)/components/Info/Thumbnail";
import { CheckCircle2 } from "lucide-react";

// Mock image for demo
const mockImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%239ca3af'%3EReal Estate%3C/text%3E%3C/svg%3E";

function Info() {
    const features = [
        "Tôi chuyên hỗ trợ khai thác nguồn nhà, tìm kiếm khách hàng tiềm năng và phát triển mạng lưới quan hệ trong lĩnh vực bất động sản.",
        "Hỗ trợ khách hàng trong việc tìm kiếm, tư vấn và lựa chọn bất động sản phù hợp với nhu cầu và ngân sách của họ.",
        "Theo dõi và chăm sóc khách hàng, đảm bảo trải nghiệm dịch vụ chuyên nghiệp và đáng tin cậy.",
        "Hỗ trợ các thủ tục pháp lý liên quan đến giao dịch bất động sản, đảm bảo mọi quy trình diễn ra thuận lợi và minh bạch.",
        "Luôn học hỏi, nâng cao kiến thức và kỹ năng để trở thành một chuyên viên bất động sản uy tín trong tương lai.",
    ];

    return (
        <div className="bg-linear-to-b from-neutral-50 to-amber-50/30 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <Thumbnail />
                    {/* Content Section */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-block">
                            <span className="mb-3 inline-block h-1.5 w-20 rounded-full bg-linear-to-r from-amber-500 to-yellow-600 shadow-lg shadow-amber-500/50" />
                        </div>

                        <h2 className="text-4xl leading-tight font-bold text-gray-900 uppercase lg:text-5xl">
                            Thực tập sinh
                            <br />
                            <span className="bg-linear-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                                Bất động sản
                            </span>
                        </h2>

                        <div className="mt-8 mb-10 space-y-5">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group flex items-start gap-4"
                                >
                                    <div className="mt-1 shrink-0">
                                        <CheckCircle2 className="h-6 w-6 text-amber-600 transition-all group-hover:scale-110 group-hover:text-yellow-600" />
                                    </div>
                                    <p className="text-base leading-relaxed text-gray-700">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <SwiperWrapper />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
