import { Maximize2 } from "lucide-react";

function OverlayHint({ isHovering }: { isHovering: boolean }) {
    return (
        <div
            className={`pointer-events-none absolute inset-0 z-10 rounded-3xl bg-black/40 transition-opacity duration-300 ${
                isHovering ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Maximize2
                    size={56}
                    className={`text-white transition-all duration-300 ${
                        isHovering
                            ? "scale-100 opacity-100"
                            : "scale-75 opacity-0"
                    }`}
                />
                <p
                    className={`mt-4 text-lg font-medium text-white transition-all delay-75 duration-300 ${
                        isHovering
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                    }`}
                >
                    Xem thư viện
                </p>
                <div
                    className={`mt-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm transition-all delay-100 duration-300 ${
                        isHovering
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                    }`}
                >
                    <span className="text-sm font-medium text-gray-800">
                        Nhấn để phóng to
                    </span>
                </div>
            </div>
        </div>
    );
}

export default OverlayHint;
