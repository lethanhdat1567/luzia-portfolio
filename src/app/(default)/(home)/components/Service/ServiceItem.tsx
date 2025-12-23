"use client";

import {
    BookOpen,
    TrendingUp,
    Dumbbell,
    Microscope,
    Briefcase,
    HeartHandshake,
    HelpCircle,
} from "lucide-react";

const iconMap = {
    BookOpen,
    TrendingUp,
    Dumbbell,
    Microscope,
    Briefcase,
    HeartHandshake,
} as const;

type IconName = keyof typeof iconMap;

type Props = {
    title: string;
    desc: string;
    icon: IconName;
};

function ServiceItem({ title, desc, icon }: Props) {
    const Icon = iconMap[icon] ?? HelpCircle;

    return (
        <div className="h-full w-full rounded-2xl border border-transparent bg-gray-100 p-6 transition-all">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <Icon size={24} />
            </span>

            <h2 className="my-4 text-xl font-bold text-gray-800">{title}</h2>
            <p className="leading-relaxed text-gray-800">{desc}</p>
        </div>
    );
}

export default ServiceItem;
