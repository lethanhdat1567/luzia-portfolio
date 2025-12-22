import { features } from "@/app/(default)/(home)/components/Info/data";
import SwiperWrapper from "@/app/(default)/(home)/components/Info/Swiper";
import Thumbnail from "@/app/(default)/(home)/components/Info/Thumbnail";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { CheckCircle2 } from "lucide-react";

function Info({ withBg }: { withBg?: boolean }) {
    return (
        <div
            className={`${withBg ? "bg-linear-to-b from-neutral-50 to-amber-50/30" : ""} py-20`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <ScrollAnimate direction="right">
                        <Thumbnail />
                    </ScrollAnimate>
                    {/* Content Section */}
                    <div className="order-1 lg:order-2">
                        <ScrollAnimate direction="down">
                            <div className="inline-block">
                                <span className="mb-3 inline-block h-1.5 w-20 rounded-full bg-linear-to-r from-amber-500 to-yellow-600 shadow-lg shadow-amber-500/50" />
                            </div>
                        </ScrollAnimate>

                        <ScrollAnimate direction="left">
                            <h2 className="text-3xl leading-tight font-bold text-gray-900 uppercase md:text-4xl lg:text-5xl">
                                Thực tập sinh
                                <br className="hidden lg:block" />
                                <span className="ml-2 bg-linear-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                                    Bất động sản
                                </span>
                            </h2>
                        </ScrollAnimate>

                        <div className="mt-8 mb-10 space-y-5">
                            {features.map((feature, index) => (
                                <ScrollAnimate
                                    direction="up"
                                    delay={index * 0.2}
                                    key={index}
                                    threshold={0}
                                >
                                    <div className="group flex items-start gap-4">
                                        <div className="mt-1 shrink-0">
                                            <CheckCircle2 className="h-6 w-6 text-amber-600 transition-all group-hover:scale-110 group-hover:text-yellow-600" />
                                        </div>
                                        <p className="text-sm leading-relaxed text-black sm:text-base">
                                            {feature}
                                        </p>
                                    </div>
                                </ScrollAnimate>
                            ))}
                        </div>
                        <SwiperWrapper />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
