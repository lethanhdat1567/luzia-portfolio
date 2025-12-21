import TabItem from "@/app/(default)/(home)/components/FAQs/components/TabList/TabItem";
import { Button } from "@/components/ui/button";

function TabList() {
    return (
        <div className="rounded-4xl bg-neutral-100 px-4 py-8 text-center">
            <Button size={"default"} className="mb-4 rounded-2xl p-5 shadow">
                I'm here to help you
            </Button>
            <div className="space-y-2">
                <TabItem />
                <TabItem />
                <TabItem />
            </div>
        </div>
    );
}

export default TabList;
