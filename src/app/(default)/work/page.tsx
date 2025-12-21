import FeatureItem from "@/app/(default)/(home)/components/Feature/FeatureItem";

function Work() {
    return (
        <div className="py-40">
            <div className="app-container">
                <p className="mb-10 max-w-3xl text-4xl font-medium text-gray-500">
                    Designing seamless experiences{" "}
                    <strong className="font-medium text-black">
                        that elevate brands and engage users
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
