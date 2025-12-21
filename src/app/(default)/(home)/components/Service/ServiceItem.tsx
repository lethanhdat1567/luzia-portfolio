import ServiceItemHead from "@/app/(default)/(home)/components/Service/ServiceItemHead";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { images } from "@/assets/images";

type Theme = {
    wrapperBg: string;
    cardBg: string;
    titleColor: string;
    descColor: string;
    iconBg: string;
    iconColor: string;
    tagBg: string;
    tagColor: string;
};

type ServiceItemProps = {
    title: string;
    description: string;
    tags: string[];
    icon: LucideIcon;
    theme: Theme;
};

function ServiceItem({
    title,
    description,
    tags,
    icon,
    theme,
}: ServiceItemProps) {
    return (
        <div
            className={`group w-full cursor-pointer rounded-3xl p-2 ${theme.wrapperBg}`}
        >
            <div className="space-y-2">
                {/* HEADER STACK */}
                <div
                    className={`relative h-14 overflow-hidden rounded-3xl ${theme.cardBg}`}
                >
                    <div className="absolute inset-0 flex items-center justify-between px-4 transition-transform duration-500 group-hover:-translate-y-full">
                        <ServiceItemHead
                            title={title}
                            icon={icon}
                            titleColor={theme.titleColor}
                            iconBg={theme.iconBg}
                            iconColor={theme.iconColor}
                        />
                    </div>

                    <div className="absolute inset-0 flex translate-y-full items-center justify-between px-4 transition-transform duration-500 group-hover:translate-y-0">
                        <ServiceItemHead
                            title={title}
                            icon={icon}
                            titleColor={theme.titleColor}
                            iconBg={theme.iconBg}
                            iconColor={theme.iconColor}
                        />
                    </div>
                </div>

                {/* CONTENT */}
                <div
                    className={`rounded-3xl p-4 transition-opacity duration-500 group-hover:opacity-50 ${theme.cardBg}`}
                >
                    <p className={`mb-4 text-[15px] ${theme.descColor}`}>
                        {description}
                    </p>

                    {/* IMAGES placeholder */}
                    <div className="mb-4 grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
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
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className={`inline-flex items-center justify-center rounded-md px-2 py-1.5 text-[15px] ${theme.tagBg} ${theme.tagColor}`}
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
