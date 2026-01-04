import { images } from "@/assets/images";
import SocialIcons from "@/components/SocialIcons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";

function ProfileAvatar() {
    return (
        <ScrollAnimate direction="up">
            <div className="rounded-lg border bg-gray-100 p-5 shadow-sm">
                {/* Avatar / Banner */}
                <ScrollAnimate direction="up" delay={0.1}>
                    <Image
                        className="h-100 w-full rounded-sm object-cover"
                        alt="Nguyen Tuan Phat"
                        src={images.banner}
                        width={500}
                        height={500}
                    />
                </ScrollAnimate>

                <div className="mt-5">
                    {/* Name */}
                    <ScrollAnimate direction="down" delay={0.2}>
                        <h2 className="mb-2 text-xl font-medium">
                            Nguyễn Tuấn Phát
                        </h2>
                    </ScrollAnimate>

                    {/* Title */}
                    <ScrollAnimate direction="up" delay={0.3}>
                        <p className="text-md text-muted-foreground">
                            Thực tập sinh bất động sản
                        </p>
                    </ScrollAnimate>

                    <Separator className="my-4" />

                    {/* Social */}
                    <ScrollAnimate direction="up" delay={0.4}>
                        <SocialIcons />
                    </ScrollAnimate>
                </div>
            </div>
        </ScrollAnimate>
    );
}

export default ProfileAvatar;
