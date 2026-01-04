function End() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 border-t border-neutral-600 pt-4 text-sm text-gray-500 lg:flex-row lg:justify-between">
            {/* Copyright */}
            <p className="text-center lg:text-left">
                © 2025 Nguyễn Tuấn Phát. All rights reserved.
            </p>

            {/* Slogan / messages cá nhân */}
            <div className="flex flex-col items-center gap-2 text-center lg:flex-row lg:items-center lg:gap-8 lg:text-left">
                <p>
                    Thực tập sinh bất động sản{" "}
                    <span className="text-white">tận tâm & chuyên nghiệp</span>
                </p>
                <p>
                    Cam kết học hỏi &{" "}
                    <span className="text-white">phát triển bản thân</span>
                </p>
            </div>
        </div>
    );
}

export default End;
