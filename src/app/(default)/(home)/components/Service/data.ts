"use client";

// services.mock.ts
import { Target, Home, Briefcase, Users } from "lucide-react";
import { images } from "@/assets/images";

export const services = [
    {
        id: "strategy",
        title: "Chiến lược kinh doanh",
        description:
            "Xây dựng chiến lược rõ ràng, khả thi và phù hợp với định hướng phát triển, giúp tối ưu hiệu quả và tạo lợi thế cạnh tranh bền vững.",
        icon: Target,
        images: [images.banner, images.banner, images.banner, images.banner],
    },
    {
        id: "real-estate",
        title: "Tư vấn bất động sản",
        description:
            "Cung cấp thông tin thị trường, phân tích dự án và tư vấn đầu tư bất động sản dựa trên nhu cầu và mục tiêu dài hạn của khách hàng.",
        icon: Home,
        images: [images.banner, images.banner, images.banner],
    },
    {
        id: "sales",
        title: "Bán hàng & đàm phán",
        description:
            "Hỗ trợ kỹ năng bán hàng, tư vấn tâm lý khách hàng và chiến lược đàm phán nhằm gia tăng tỷ lệ chốt giao dịch.",
        icon: Briefcase,
        images: [images.banner, images.banner],
    },
    {
        id: "network",
        title: "Kết nối khách hàng",
        description:
            "Xây dựng và mở rộng mạng lưới khách hàng, đối tác thông qua giao tiếp minh bạch, uy tín và mối quan hệ lâu dài.",
        icon: Users,
        images: [images.banner, images.banner, images.banner],
    },
];
