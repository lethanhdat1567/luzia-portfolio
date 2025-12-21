import FeatureItem from "@/app/(default)/(home)/components/Feature/FeatureItem";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function Feature() {
    return (
        <div className="app-container py-20">
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-4xl font-medium tracking-tighter">
                    Dự án nổi bật
                </h2>
                <Button
                    variant="secondary"
                    size="xl"
                    className="border border-transparent text-[16px] text-neutral-700 hover:border-neutral-300"
                >
                    Xem chi tiết <ArrowRight />
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <FeatureItem />
                <FeatureItem />
                <FeatureItem />
                <FeatureItem />
            </div>
        </div>
    );
}

export default Feature;
