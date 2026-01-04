import IntroContent from "@/app/(default)/(home)/components/FAQs/components/IntroContent/IntroContent";
import TabList from "@/app/(default)/(home)/components/FAQs/components/TabList/Tablist";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { getSheetContent } from "@/lib/getSheetContent";

async function FAQs() {
    const content = await getSheetContent("Home");

    return (
        <section className="bg-white py-20 md:py-30">
            <div className="px-6 md:px-30">
                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center">
                    <ScrollAnimate direction="down">
                        <h2 className="mb-4 text-2xl font-semibold text-neutral-800 sm:text-3xl lg:text-4xl">
                            {content.faq_title}
                        </h2>
                    </ScrollAnimate>

                    <ScrollAnimate direction="down" delay={0.2}>
                        <p className="max-w-3xl text-sm font-medium text-neutral-500 sm:text-base lg:text-lg">
                            {content.faq_subtitle}
                        </p>
                    </ScrollAnimate>
                </div>

                {/* Content */}
                <div className="mt-10 grid grid-cols-1 gap-y-12 sm:mt-12 lg:mt-14 lg:grid-cols-2 lg:gap-x-10">
                    {/* Intro */}
                    <ScrollAnimate direction="up" delay={0.25}>
                        <IntroContent />
                    </ScrollAnimate>

                    {/* Tabs */}
                    <ScrollAnimate direction="up" delay={0.4}>
                        <TabList />
                    </ScrollAnimate>
                </div>
            </div>
        </section>
    );
}

export default FAQs;
