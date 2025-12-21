import FeatureItem from "@/app/(default)/(home)/components/Feature/FeatureItem";

function Work() {
    return (
        <div className="py-30">
            <div className="app-container">
                <p className="mb-10 max-w-3xl text-4xl font-medium text-gray-500">
                    Tổng hợp các dự án, nhà phố và đất nền{" "}
                    <strong className="font-medium text-black">
                        đang tìm kiếm người mua với thông tin rõ ràng và cập
                        nhật
                    </strong>
                </p>

                <div className="grid grid-cols-2 gap-3">
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                </div>
            </div>
        </div>
    );
}

export default Work;
