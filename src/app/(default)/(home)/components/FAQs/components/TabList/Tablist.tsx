import { faqs } from "@/app/(default)/(home)/components/FAQs/components/data";
import TabItem from "@/app/(default)/(home)/components/FAQs/components/TabList/TabItem";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { Button } from "@/components/ui/button";

function TabList() {
    return (
        <ScrollAnimate direction="scale">
            <div className="rounded-4xl bg-neutral-100 px-2 py-8 text-center sm:px-4">
                <Button
                    size="default"
                    className="mb-4 cursor-default rounded-2xl p-5 shadow"
                >
                    Giải đáp những thắc mắc
                </Button>

                <div className="space-y-2">
                    {faqs.map((item, index) => (
                        <TabItem
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </ScrollAnimate>
    );
}

export default TabList;
