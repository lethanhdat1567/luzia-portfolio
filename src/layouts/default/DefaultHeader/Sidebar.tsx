"use client"; // cần nếu dùng useState ở Next.js 13+

import { useState } from "react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { sidebarIcon } from "@/assets/icons";
import { Logo } from "@/components/Logo";
import { X } from "lucide-react";
import Link from "next/link";
import SocialIcons from "@/app/(default)/contact/ContactIcons";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Liên hệ", href: "/contact" },
];

function Sidebar() {
    const [open, setOpen] = useState(false);

    const closeDrawer = () => setOpen(false);

    return (
        <Drawer direction="top" open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <div className="inline-block lg:hidden">
                    <button className="h-8 w-8">{sidebarIcon}</button>
                </div>
            </DrawerTrigger>
            <DrawerContent className="z-99999999 p-4">
                <DrawerHeader className="hidden">
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>{" "}
                </DrawerHeader>
                <div className="flex items-center justify-between">
                    <Logo />
                    <button onClick={closeDrawer}>
                        <X
                            size={28}
                            strokeWidth={1.2}
                            className="text-neutral-800"
                        />
                    </button>
                </div>
                <ul className="my-6 mb-0">
                    {navItems.map((nav) => (
                        <li key={nav.href}>
                            <Link
                                href={nav.href}
                                className="my-1 block w-full p-2 text-[17px] font-medium"
                                onClick={closeDrawer} // click link cũng đóng drawer
                            >
                                {nav.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <SocialIcons small />
                <Button size="lg" className="mt-7 py-6" onClick={closeDrawer}>
                    Tư vấn ngay
                </Button>
            </DrawerContent>
        </Drawer>
    );
}

export default Sidebar;
