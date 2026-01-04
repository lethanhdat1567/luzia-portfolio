import { getSheetContent } from "@/lib/getSheetContent";
import TabItem from "./TabItem";

export default async function Tabs() {
    const content = await getSheetContent("Home");
    const list = JSON.parse(content.faq_list) || [];

    return (
        <div>
            {list.map((item: any, index: number) => (
                <TabItem
                    key={index}
                    question={item.title}
                    answer={item.content}
                    defaultOpen={index === 0}
                />
            ))}
        </div>
    );
}
