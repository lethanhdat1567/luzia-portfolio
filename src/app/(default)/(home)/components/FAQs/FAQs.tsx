import IntroContent from "@/app/(default)/(home)/components/FAQs/components/IntroContent/IntroContent";
import TabList from "@/app/(default)/(home)/components/FAQs/components/TabList/Tablist";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function FAQs() {
    return (
        <div className="bg-white py-20">
            <div className="app-container grid grid-cols-2 gap-20">
                <IntroContent />
                <TabList />
            </div>
        </div>
    );
}

export default FAQs;
