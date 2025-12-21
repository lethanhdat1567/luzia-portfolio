function End() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 border-t border-neutral-600 pt-4 text-sm text-gray-500 lg:flex-row lg:justify-between">
            {/* Copyright */}
            <p className="text-center lg:text-left">
                © 2025 Tuấn Phát. All rights reserved.
            </p>

            {/* Slogan / messages */}
            <div className="flex flex-col items-center gap-2 text-center lg:flex-row lg:items-center lg:gap-8 lg:text-left">
                <p>
                    Bất động sản{" "}
                    <span className="text-white">minh bạch & bền vững</span>
                </p>
                <p>
                    Đồng hành cùng{" "}
                    <span className="text-white">khách hàng</span>
                </p>
            </div>
        </div>
    );
}

export default End;
