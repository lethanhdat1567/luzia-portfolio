// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";

// Inter (chính)
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

// Instrument Sans (phụ, dùng riêng)
const instrument = Instrument_Sans({
    subsets: ["latin"],
    variable: "--font-instrument",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Nguyễn Tuấn Phát - Tư vấn & Đầu tư Bất Động Sản",
    description:
        "Nguyễn Tuấn Phát, thực tập sinh bất động sản, giúp bạn tìm kiếm căn hộ, đất nền, và dự án đầu tư an toàn tại Việt Nam.",
    icons: {
        icon: "/vercel.svg", // favicon chuẩn
        shortcut: "/vercel.svg", // favicon shortcut
        apple: "/vercel.svg", // nếu muốn cho iOS
    },
    keywords: [
        "bất động sản",
        "đầu tư",
        "căn hộ",
        "đất nền",
        "dự án",
        "Nguyễn Tuấn Phát",
    ],
    authors: [
        { name: "Nguyễn Tuấn Phát", url: "https://tuatphatskl.vercel.app/" },
    ],
    openGraph: {
        title: "Nguyễn Tuấn Phát - Tư vấn & Đầu tư Bất Động Sản",
        description:
            "Cùng Nguyễn Tuấn Phát tìm kiếm căn hộ, đất nền, và dự án đầu tư an toàn.",
        url: "https://tuatphatskl.vercel.app/",
        siteName: "Nguyễn Tuấn Phát BĐS",
        images: [
            {
                url: "https://tuatphatskl.vercel.app/withBG.png",
                width: 1200,
                height: 630,
                alt: "Nguyễn Tuấn Phát - Bất Động Sản",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nguyễn Tuấn Phát - Tư vấn & Đầu tư Bất Động Sản",
        description:
            "Tìm kiếm căn hộ, đất nền, và dự án an toàn cùng Nguyễn Tuấn Phát.",
        images: ["https://tuatphatskl.vercel.app/withBG.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body
                className={`${inter.className} ${instrument.variable} font-sans antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
