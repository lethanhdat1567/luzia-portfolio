"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
    const [hovered, setHovered] = useState<string | null>(null);
    const pathname = usePathname();

    const navItems = [
        { name: "Trang chủ", href: "/" },
        { name: "Giới thiệu", href: "/about" },
    ];

    return (
        <ul className="ml-36 hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                    <li key={item.name} className="relative">
                        <Link
                            href={item.href}
                            className={`relative block px-4 py-2 text-[15px] font-medium transition-all duration-300 ${
                                hovered && hovered !== item.name
                                    ? "opacity-40"
                                    : "opacity-100"
                            }`}
                            onMouseEnter={() => setHovered(item.name)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {item.name}

                            {/* Animated underline */}
                            <span
                                className={`absolute bottom-1.5 left-0 h-0.5 bg-black transition-all duration-500 ${
                                    isActive
                                        ? "w-full"
                                        : hovered === item.name
                                          ? "w-full"
                                          : "w-0"
                                }`}
                            />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default Navbar;
