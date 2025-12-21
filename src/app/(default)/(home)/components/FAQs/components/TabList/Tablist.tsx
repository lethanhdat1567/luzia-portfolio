import { faqs } from "@/app/(default)/(home)/components/FAQs/components/data";
import TabItem from "@/app/(default)/(home)/components/FAQs/components/TabList/TabItem";
import { Button } from "@/components/ui/button";

function TabList() {
    return (
        <div className="rounded-4xl bg-neutral-100 px-4 py-8 text-center">
            <Button size="default" className="mb-4 rounded-2xl p-5 shadow">
                Tôi sẵn sàng hỗ trợ bạn
            </Button>

            <div className="space-y-2">
                {faqs.map((item) => (
                    <TabItem
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </div>
    );
}

export default TabList;
