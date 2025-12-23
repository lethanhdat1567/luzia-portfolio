"use client";

import { getSheetContent } from "@/lib/getSheetContent";
import Link from "next/link";
import { useEffect, useState } from "react";

type LinkItem = {
    title: string;
    href: string;
    type?: "internal" | "external" | "phone" | "email";
};

function Navlist() {
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        const http = async () => {
            const res = await getSheetContent("Contact");
            setContent(res);
        };

        http();
    }, []);

    if (!content) return;

    const menus = [
        { title: "Trang chủ", href: "/" },
        { title: "Giới thiệu", href: "/about" },
        { title: "Liên hệ", href: "/contact" },
    ];

    const contacts: LinkItem[] = [
        { title: "Tiktok", href: content.tiktok_link, type: "external" },
        { title: "Zalo", href: content.zalo_link, type: "external" },
        { title: "Facebook", href: content.facebook_link, type: "external" },
        { title: "Instagram", href: content.ig_link, type: "external" },
        {
            title: "Hotline",
            href: `tel:${content.phone_number}`,
            type: "phone",
        },
        {
            title: "Email",
            href: `mailto:${content.contact_email}`,
            type: "email",
        },
    ];

    const policies = [
        { title: "Chính sách bảo mật", href: "#" },
        { title: "Điều khoản sử dụng", href: "#" },
    ];

    const renderLinks = (items: LinkItem[]) =>
        items.map((item) => {
            if (item.type === "internal") {
                return (
                    <Link
                        key={item.title}
                        href={item.href}
                        className="transition-colors hover:text-gray-400"
                    >
                        {item.title}
                    </Link>
                );
            }

            return (
                <a
                    key={item.title}
                    href={item.href}
                    target={item.type === "external" ? "_blank" : undefined}
                    rel={
                        item.type === "external"
                            ? "noopener noreferrer"
                            : undefined
                    }
                    className="transition-colors hover:text-gray-400"
                >
                    {item.title}
                </a>
            );
        });

    return (
        <div className="grid grid-cols-1 gap-8 font-medium sm:grid-cols-2 lg:grid-cols-3">
            {/* Menus */}
            <div className="flex flex-col gap-4">{renderLinks(menus)}</div>

            {/* Contacts */}
            <div className="flex flex-col gap-4">{renderLinks(contacts)}</div>

            {/* Policies */}
            <div className="col-span-2 flex flex-col gap-4 lg:col-span-1">
                {renderLinks(policies)}
            </div>
        </div>
    );
}

export default Navlist;
