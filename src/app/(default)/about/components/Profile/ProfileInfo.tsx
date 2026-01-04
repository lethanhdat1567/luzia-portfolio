import { features } from "@/app/(default)/(home)/components/Info/data";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";

function ProfileInfo() {
    return (
        <div className="rounded-lg border bg-gray-100 p-5 shadow-sm">
            {/* Giới thiệu */}
            <ScrollAnimate direction="down">
                <h3 className="mb-2 text-lg font-semibold">Giới thiệu</h3>
            </ScrollAnimate>

            <ScrollAnimate direction="down" delay={0.15}>
                <p className="text-sm leading-relaxed">
                    Tôi là Nguyên Tuấn Phát, sinh viên chuyên ngành [NGÀNH HỌC]
                    tại [TÊN TRƯỜNG]. Tôi hiện là thực tập sinh bất động sản,
                    đang trong quá trình học hỏi kinh nghiệm thực tế, rèn luyện
                    kỹ năng tư vấn và định hướng phát triển lâu dài trong lĩnh
                    vực này.
                </p>
            </ScrollAnimate>

            <Separator className="my-4" />

            {/* Mục tiêu */}
            <ScrollAnimate direction="down">
                <h3 className="mb-2 text-lg font-semibold">
                    Mục tiêu nghề nghiệp
                </h3>
            </ScrollAnimate>

            <ScrollAnimate direction="down" delay={0.15}>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                    Mong muốn học hỏi kinh nghiệm thực tế, rèn luyện kỹ năng tư
                    vấn, chăm sóc khách hàng và xây dựng nền tảng vững chắc
                    trong lĩnh vực bất động sản.
                </p>
            </ScrollAnimate>

            <Separator className="my-4" />

            {/* Điểm mạnh */}
            <ScrollAnimate direction="down">
                <h3 className="mb-2 text-lg font-semibold">Điểm mạnh</h3>
            </ScrollAnimate>

            <ul className="mt-3 space-y-3">
                {features.map((feature: string, index: number) => (
                    <ScrollAnimate
                        key={index}
                        direction="down"
                        delay={0.2 + index * 0.12}
                        threshold={0.1}
                    >
                        <li className="flex items-start gap-3 text-sm">
                            <Sparkles className="mt-1 h-4 w-4 text-emerald-600" />
                            <span className="leading-relaxed">{feature}</span>
                        </li>
                    </ScrollAnimate>
                ))}
            </ul>
        </div>
    );
}

export default ProfileInfo;
