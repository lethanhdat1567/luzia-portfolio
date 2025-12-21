import { images } from "@/assets/images";
import Image from "next/image";

function Background() {
    return (
        <div className="absolute inset-0 z-0">
            <Image
                src={images.hiwBg}
                alt="banner"
                className="h-full w-full object-cover object-center"
            />
        </div>
    );
}

export default Background;
