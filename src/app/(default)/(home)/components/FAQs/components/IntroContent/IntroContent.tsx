import styles from "./IntroContent.module.css";
import { getSheetContent } from "@/lib/getSheetContent";
import { Quote } from "lucide-react";
import Image from "next/image";
import { convertDriveLinkToDirect } from "@/lib/upload";

async function IntroContent() {
    const content = await getSheetContent("Home");

    return (
        <div>
            <div
                className={`${styles.intro} flex flex-col items-center text-center`}
            >
                <Quote className="mb-4 h-10 w-10 sm:mb-6 sm:h-12 sm:w-12 md:h-16 md:w-16" />

                <p className="max-w-xl text-base font-normal sm:max-w-2xl sm:text-lg md:text-xl lg:text-2xl">
                    {content.faq_quote}
                </p>

                <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
                    {content.faq_avatar && (
                        <div className="relative h-10 w-10 overflow-hidden rounded-full sm:h-12 sm:w-12 md:h-16 md:w-16">
                            <Image
                                src={
                                    convertDriveLinkToDirect(
                                        content.faq_avatar,
                                    ) || ""
                                }
                                alt="Nguyễn Tuấn Phát"
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    <h3 className="text-sm font-medium sm:text-base md:text-lg">
                        Nguyễn Tuấn Phát
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default IntroContent;
