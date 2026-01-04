import IntroContent from "@/app/(default)/(home)/components/FAQs/components/IntroContent/IntroContent";
import TabList from "@/app/(default)/(home)/components/FAQs/components/TabList/Tablist";

function FAQs() {
    return (
        <div className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="px-30">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="mb-4 text-3xl font-semibold text-neutral-800">
                        Điểm mạnh của tôi
                    </h2>
                    <p className="max-w-4xl text-sm font-medium text-neutral-500 lg:text-3xl">
                        Những năng lực cốt lõi định hình cách tôi làm việc và
                        tạo ra giá trị.
                    </p>
                </div>
                <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-1 lg:grid-cols-2">
                    <IntroContent />
                    <TabList />
                </div>
            </div>
        </div>
    );
}

export default FAQs;
