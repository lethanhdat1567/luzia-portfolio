import { LucideIcon } from "lucide-react";

type ServiceItemHeadProps = {
    title: string;
    icon: LucideIcon;
    titleColor: string;
    iconBg: string;
    iconColor: string;
};

function ServiceItemHead({
    title,
    icon: Icon,
    titleColor,
    iconBg,
    iconColor,
}: ServiceItemHeadProps) {
    return (
        <>
            <h3 className={`text-xl font-medium ${titleColor}`}>{title}</h3>

            <span className={`rounded-md p-2 ${iconBg}`}>
                <Icon size={20} className={iconColor} />
            </span>
        </>
    );
}

export default ServiceItemHead;
