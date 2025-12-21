// mock/serviceItems.ts
import { Building2, Handshake, FileCheck } from "lucide-react";

export const serviceItems = [
    {
        id: 1,
        title: "Khai thác nguồn nhà",
        subtitle: "Hỗ trợ tìm kiếm và sàng lọc nhà, dự án",
        description:
            "Tôi hỗ trợ thu thập và sàng lọc thông tin về các căn nhà, dự án phù hợp với nhu cầu khách hàng, đảm bảo dữ liệu chính xác và đáng tin cậy.",

        tags: ["Nhà phố", "Đất nền", "Dự án tiềm năng"],
        icon: Building2,
        theme: {
            wrapperBg: "bg-neutral-50",
            cardBg: "bg-white",
            titleColor: "text-neutral-900",
            descColor: "text-neutral-500",
            iconBg: "bg-emerald-50",
            iconColor: "text-emerald-600",
            tagBg: "bg-neutral-100",
            tagColor: "text-neutral-500",
        },
    },
    {
        id: 2,
        title: "Kết nối & tư vấn khách hàng",
        subtitle: "Hỗ trợ liên hệ và chăm sóc khách hàng",
        description:
            "Tôi liên hệ, tư vấn và đồng hành cùng khách hàng trong việc lựa chọn bất động sản phù hợp với nhu cầu và ngân sách, đảm bảo trải nghiệm chuyên nghiệp.",

        tags: ["Liên hệ khách hàng", "Tư vấn", "Hỗ trợ chọn lựa"],
        icon: Handshake,
        theme: {
            wrapperBg: "bg-black",
            cardBg: "bg-purple-800",
            titleColor: "text-white",
            descColor: "text-white",
            iconBg: "bg-white/15",
            iconColor: "text-white",
            tagBg: "border border-white/40",
            tagColor: "text-white",
        },
    },
    {
        id: 3,
        title: "Hỗ trợ thủ tục pháp lý",
        subtitle: "Đồng hành trong hồ sơ & hợp đồng",
        description:
            "Tôi hỗ trợ chuẩn bị hồ sơ, theo sát các thủ tục pháp lý và hợp đồng, đảm bảo các giao dịch bất động sản diễn ra minh bạch, rõ ràng và an toàn.",

        tags: ["Pháp lý", "Hợp đồng", "Sang tên"],
        icon: FileCheck,
        theme: {
            wrapperBg: "bg-neutral-50",
            cardBg: "bg-white",
            titleColor: "text-neutral-900",
            descColor: "text-neutral-500",
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
            tagBg: "bg-neutral-100",
            tagColor: "text-neutral-500",
        },
    },
];
