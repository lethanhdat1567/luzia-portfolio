import { features } from "@/app/(default)/(home)/components/Info/data";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { Separator } from "@/components/ui/separator";
import { getSheetContent } from "@/lib/getSheetContent";
import { Sparkles } from "lucide-react";

async function ProfileInfo() {
    const content = await getSheetContent("About");
    const lists = JSON.parse(content.info_strong_list) || [];

    return (
        <div className="rounded-lg border bg-gray-100 p-5 shadow-sm">
            {/* Giới thiệu */}
            <ScrollAnimate direction="down">
                <h3 className="mb-2 text-lg font-semibold">
                    {content.info_introduce_title}
                </h3>
            </ScrollAnimate>

            <ScrollAnimate direction="down" delay={0.15}>
                <p className="text-sm leading-relaxed">
                    {content.info_introduce_desc}
                </p>
            </ScrollAnimate>

            <Separator className="my-4" />

            {/* Mục tiêu */}
            <ScrollAnimate direction="down">
                <h3 className="mb-2 text-lg font-semibold">
                    {content.info_aim_title}
                </h3>
            </ScrollAnimate>

            <ScrollAnimate direction="down" delay={0.15}>
                <p className="mt-1 text-sm leading-relaxed">
                    {content.info_aim_desc}
                </p>
            </ScrollAnimate>

            <Separator className="my-4" />

            {/* Điểm mạnh */}
            <ScrollAnimate direction="down">
                <h3 className="mb-2 text-lg font-semibold">
                    {content.info_strong_title}
                </h3>
            </ScrollAnimate>

            <ul className="mt-3 space-y-3">
                {lists &&
                    lists.map((feature: string, index: number) => (
                        <ScrollAnimate
                            key={index}
                            direction="down"
                            delay={0.2 + index * 0.12}
                            threshold={0.1}
                        >
                            <li className="flex items-start gap-3 text-sm">
                                <Sparkles className="mt-1 h-4 w-4 text-emerald-600" />
                                <span className="leading-relaxed">
                                    {feature}
                                </span>
                            </li>
                        </ScrollAnimate>
                    ))}
            </ul>
        </div>
    );
}

export default ProfileInfo;
