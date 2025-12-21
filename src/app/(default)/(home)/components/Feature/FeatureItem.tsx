import { images } from "@/assets/images";
import Image from "next/image";

function FeatureItem() {
    return (
        <div className="group relative h-112.5 w-full cursor-pointer overflow-hidden rounded-4xl">
            <Image
                className="absolute inset-0 h-full w-full scale-110 object-cover transition duration-500 group-hover:scale-100"
                alt="feature"
                src={images.feature}
            />
            <div className="absolute bottom-6 left-6 text-white">
                <h3>LumeX</h3>
                <div className="flex items-center gap-2">
                    <div className="rounded-xl border p-2">SaaS</div>
                    <div className="rounded-xl border p-2">
                        Dashboard Design
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureItem;
