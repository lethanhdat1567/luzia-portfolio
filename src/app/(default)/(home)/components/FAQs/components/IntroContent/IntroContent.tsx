import { images } from "@/assets/images";
import styles from "./IntroContent.module.css";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { getSheetContent } from "@/lib/getSheetContent";
import { Quote } from "lucide-react";
import Image from "next/image";

async function IntroContent() {
    const content = await getSheetContent("Home");

    return (
        <div>
            <div className={styles.intro}>
                <Quote size={40} className="mb-6" />
                <p className="text-center text-3xl font-normal">
                    “Our main goal is to turn complex challenges into clear
                    strategies that drive growth.”
                </p>
                <div className="mt-10 flex items-center gap-4">
                    <Image
                        src={images.smallAvatar}
                        className="h-10 w-10 rounded-full"
                        alt="Nguyễn Tuấn Phát"
                    />
                    <h3 className="text-md font-medium">Nguyễn Tuấn Phát</h3>
                </div>
            </div>
        </div>
    );
}

export default IntroContent;
