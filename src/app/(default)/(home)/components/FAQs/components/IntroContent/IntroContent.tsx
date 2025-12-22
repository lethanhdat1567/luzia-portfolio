import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { Button } from "@/components/ui/button";
import { getSheetContent } from "@/lib/getSheetContent";
import { ArrowRight } from "lucide-react";

async function IntroContent() {
    const content = await getSheetContent("Home");

    return (
        <div>
            <ScrollAnimate direction="up">
                <div className="flex w-full items-center gap-2">
                    <h2 className="shrink-0 text-xl font-medium text-gray-600">
                        Cam kết
                    </h2>
                    <span className="h-0.5 w-full bg-neutral-200"></span>
                </div>
            </ScrollAnimate>
            <ScrollAnimate direction="up" delay={0.2}>
                <p className="mt-4 mb-10 text-2xl font-medium text-gray-500 md:text-3xl">
                    {content.faq_title}
                </p>
            </ScrollAnimate>

            <ScrollAnimate direction="up" delay={0.4}>
                <Button size={"xl"} className="group shadow-xl">
                    Liên hệ tư vấn{" "}
                    <ArrowRight className="transition group-hover:translate-x-1" />
                </Button>
            </ScrollAnimate>
        </div>
    );
}

export default IntroContent;
