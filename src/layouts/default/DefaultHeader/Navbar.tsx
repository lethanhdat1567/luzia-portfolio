"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
    const [hovered, setHovered] = useState<string | null>(null);

    const navItems = [
        { name: "Work", href: "/work" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <ul className="flex items-center">
            {navItems.map((item) => (
                <li key={item.name}>
                    <Link
                        href={item.href}
                        className={`px-3 py-1 font-[Instrument_Sans] text-[15px] font-medium transition-opacity duration-500 ${hovered && hovered !== item.name ? "opacity-40" : "opacity-100"} `}
                        onMouseEnter={() => setHovered(item.name)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Navbar;
