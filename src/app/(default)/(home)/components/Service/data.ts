// mock/serviceItems.ts
import { Building2, Handshake, FileCheck } from "lucide-react";

export const serviceItems = [
    {
        id: 1,
        title: "Khai thác & chọn lọc dự án",
        description:
            "Tôi liên tục cập nhật thị trường và sàng lọc kỹ lưỡng các dự án, nhà phố và đất nền có pháp lý rõ ràng, vị trí tiềm năng và khả năng khai thác lâu dài, nhằm mang đến những lựa chọn an toàn và phù hợp cho từng nhu cầu.",

        tags: ["Dự án mở bán", "Nhà phố", "Đất nền"],
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
        title: "Tư vấn & kết nối người mua",
        description:
            "Dựa trên nhu cầu thực tế và khả năng tài chính của khách hàng, tôi phân tích, tư vấn giải pháp phù hợp và kết nối người mua với sản phẩm đúng giá trị, đúng thời điểm để tối ưu hiệu quả giao dịch.",

        tags: ["Mua ở thực", "Đầu tư", "Ngân sách"],
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
        title: "Hỗ trợ pháp lý & đồng hành",
        description:
            "Tôi đồng hành cùng khách hàng trong suốt quá trình giao dịch, hỗ trợ chuẩn bị hồ sơ, thủ tục pháp lý và theo sát từng bước để đảm bảo mọi giao dịch diễn ra minh bạch, rõ ràng và an toàn.",

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
