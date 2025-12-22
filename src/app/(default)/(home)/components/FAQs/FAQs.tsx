import IntroContent from "@/app/(default)/(home)/components/FAQs/components/IntroContent/IntroContent";
import TabList from "@/app/(default)/(home)/components/FAQs/components/TabList/Tablist";

function FAQs() {
    return (
        <div className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="app-container grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-1 lg:grid-cols-2">
                <IntroContent />
                <TabList />
            </div>
        </div>
    );
}

export default FAQs;
