"use client";

function Project() {
    return (
        <div className="absolute bottom-10 left-12 z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-100 px-4 py-1 text-neutral-500">
                <span className="relative flex h-2.5 w-2.5">
                    {/* Vòng ping lớn - ping mỗi 2s */}
                    <span
                        className="absolute top-1/2 left-1/2 h-3 w-3 rounded-full bg-green-400 opacity-0"
                        style={{
                            animation: "pingPulse 2s ease-out infinite",
                        }}
                    />
                    {/* Dot chính */}
                    <span className="relative h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                Chuyên khu vực: Quận 6 (TP.HCM)
            </div>
            <h1 className="mt-4 max-w-xl text-4xl font-medium">
                Tuấn Phát – Đồng hành cùng bạn trong đầu tư và an cư bền vững
            </h1>

            <style jsx>{`
                @keyframes pingPulse {
                    0% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0.75;
                    }
                    30% {
                        transform: translate(-50%, -50%) scale(2.5);
                        opacity: 0;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(2.5);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
}

export default Project;
