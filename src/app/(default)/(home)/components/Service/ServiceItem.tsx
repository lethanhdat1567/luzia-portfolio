import { ArrowUpRight } from "lucide-react";

type Props = {
    title: string;
    desc: string;
    Icon: any;
};

function ServiceItem({ title, desc, Icon }: Props) {
    return (
        <div className="w-full rounded-2xl border border-transparent bg-gray-100 p-6 transition-all">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <Icon size={24} />
            </span>
            <h2 className="my-4 text-xl font-bold text-gray-800">{title}</h2>
            <p className="leading-relaxed text-gray-800">{desc}</p>
        </div>
    );
}

export default ServiceItem;
