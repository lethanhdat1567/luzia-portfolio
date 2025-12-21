function Navlist() {
    return (
        <div className="flex gap-16 lg:gap-24">
            {/* MENU */}
            <div className="flex flex-col gap-4">
                <a href="#" className="transition-colors hover:text-gray-400">
                    Trang chủ
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Dự án
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Dịch vụ
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Liên hệ
                </a>
            </div>

            {/* KÊNH LIÊN HỆ */}
            <div className="flex flex-col gap-4">
                <a href="#" className="transition-colors hover:text-gray-400">
                    Zalo
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Facebook
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Hotline
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Email
                </a>
            </div>

            {/* PHÁP LÝ / THÔNG TIN */}
            <div className="flex flex-col gap-4">
                <a href="#" className="transition-colors hover:text-gray-400">
                    Chính sách bảo mật
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Điều khoản sử dụng
                </a>
            </div>
        </div>
    );
}

export default Navlist;
