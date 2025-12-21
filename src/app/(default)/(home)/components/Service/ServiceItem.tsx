import ServiceItemHead from "@/app/(default)/(home)/components/Service/ServiceItemHead";
import { images } from "@/assets/images";
import { ScreenShareOffIcon } from "lucide-react";
import Image from "next/image";

const TAGS = ["Logo Design", "Logo Design", "Logo Design"];

function ServiceItem({ isPurple }: { isPurple?: boolean }) {
    const wrapperBg = isPurple ? "bg-black" : "bg-neutral-50";
    const cardBg = isPurple ? "bg-purple-800 text-white" : "bg-white";

    return (
        <div
            className={`group w-full cursor-pointer rounded-3xl p-2 ${wrapperBg}`}
        >
            <div className="space-y-2">
                {/* HEADER STACK */}
                <div
                    className={`relative h-14 overflow-hidden rounded-3xl ${cardBg}`}
                >
                    <div className="absolute inset-0 flex items-center justify-between px-4 transition-transform duration-500 group-hover:-translate-y-full">
                        <ServiceItemHead />
                    </div>

                    <div className="absolute inset-0 flex translate-y-full items-center justify-between px-4 transition-transform duration-500 group-hover:translate-y-0">
                        <ServiceItemHead />
                    </div>
                </div>

                {/* CONTENT */}
                <div
                    className={`rounded-3xl p-4 transition-opacity duration-500 group-hover:opacity-50 ${cardBg}`}
                >
                    <p
                        className={`mb-4 text-[15px] ${isPurple ? "text-white" : "text-neutral-500"}`}
                    >
                        A strong brand is more than just a logo—it’s the
                        foundation of how your audience perceives you. I create
                        cohesive and impactful brand identities that ensure
                        consistency across all touchpoints
                    </p>

                    {/* IMAGES */}
                    <div className="mb-4 grid grid-cols-3 gap-2">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <Image
                                key={i}
                                src={images.feature}
                                alt="feature"
                                className="h-25 w-full rounded-xl"
                            />
                        ))}
                    </div>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2">
                        {TAGS.map((tag, i) => (
                            <span
                                key={i}
                                className={`inline-flex items-center justify-center rounded-md px-2 py-1.5 text-[15px] ${
                                    isPurple
                                        ? "border text-white"
                                        : "bg-neutral-100 text-neutral-500"
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceItem;
