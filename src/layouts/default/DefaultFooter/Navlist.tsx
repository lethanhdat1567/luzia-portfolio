"use client";

function Navlist() {
    const menus = [
        { title: "Trang chủ", href: "#" },
        { title: "Dự án", href: "#" },
        { title: "Dịch vụ", href: "#" },
        { title: "Liên hệ", href: "#" },
    ];

    const contacts = [
        { title: "Zalo", href: "#" },
        { title: "Facebook", href: "#" },
        { title: "Hotline", href: "#" },
        { title: "Email", href: "#" },
    ];

    const policies = [
        { title: "Chính sách bảo mật", href: "#" },
        { title: "Điều khoản sử dụng", href: "#" },
    ];

    const renderLinks = (items: { title: string; href: string }[]) =>
        items.map((item) => (
            <a
                key={item.title}
                href={item.href}
                className="transition-colors hover:text-gray-400"
            >
                {item.title}
            </a>
        ));

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
