import { images } from "@/assets/images";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { getSheetContent } from "@/lib/getSheetContent";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

async function Info({ withBg }: { withBg?: boolean }) {
    const content = await getSheetContent("Home");
    const features = JSON.parse(content.about_list_info) || [];

    return (
        <div
            className={`${withBg ? "bg-linear-to-b from-neutral-50 to-amber-50/30" : ""} py-30`}
        >
            <div className="app-container">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-10">
                    <ScrollAnimate direction="right">
                        <Image
                            src={images.info}
                            width={500}
                            height={700}
                            alt="Nguyễn Tuấn Phát"
                            className="h-150 w-full rounded-sm object-cover"
                        />
                    </ScrollAnimate>
                    {/* Content Section */}
                    <div className="order-1 lg:order-2">
                        <ScrollAnimate direction="down">
                            <div className="inline-block">
                                <span className="mb-3 inline-block h-1.5 w-20 rounded-full bg-linear-to-r from-amber-500 to-yellow-600 shadow-lg shadow-amber-500/50" />
                            </div>
                        </ScrollAnimate>

                        <ScrollAnimate direction="left">
                            <h2 className="text-3xl leading-tight font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                                {content.about_title}
                                <span className="ml-2 bg-linear-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                                    {content.about_hightlight}
                                </span>
                            </h2>
                        </ScrollAnimate>

                        <ScrollAnimate direction="left">
                            <p className="mt-6 text-lg text-neutral-800">
                                {content.about_desc}
                            </p>
                        </ScrollAnimate>

                        <div className="mt-8 mb-10 space-y-5">
                            {features.map((feature: any, index: number) => (
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
