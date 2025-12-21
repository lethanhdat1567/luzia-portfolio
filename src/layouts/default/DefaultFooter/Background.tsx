import { images } from "@/assets/images";
import Image from "next/image";

function Background() {
    return (
        <div className="absolute inset-0">
            <Image
                className="h-full w-full object-cover"
                src={images.hiwBg}
                alt="bg"
            />
        </div>
    );
}

export default Background;
