import { images } from "@/assets/images";
import SocialIcons from "@/components/SocialIcons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { getSheetContent } from "@/lib/getSheetContent";
import { convertDriveLinkToDirect } from "@/lib/upload";

async function ProfileAvatar() {
    const content = await getSheetContent("About");

    return (
        <ScrollAnimate direction="up">
            <div className="rounded-lg border bg-gray-100 p-5 shadow-sm">
                {/* Avatar / Banner */}
                <ScrollAnimate direction="up" delay={0.1}>
                    {content.profile_avatar && (
                        <Image
                            className="h-110 w-full rounded-sm object-cover"
                            alt="Nguyen Tuan Phat"
                            src={
                                convertDriveLinkToDirect(
                                    content.profile_avatar,
                                ) || ""
                            }
                            width={500}
                            height={500}
                        />
                    )}
                </ScrollAnimate>

                <div className="mt-5">
                    {/* Name */}
                    <ScrollAnimate direction="down" delay={0.2}>
                        <h2 className="mb-2 text-xl font-medium">
                            {content.profile_name}
                        </h2>
                    </ScrollAnimate>

                    {/* Title */}
                    <ScrollAnimate direction="up" delay={0.3}>
                        <p className="text-md text-muted-foreground">
                            {content.profile_desc}
                        </p>
                    </ScrollAnimate>

                    <Separator className="my-4" />

                    {/* Social */}
                    <ScrollAnimate direction="up" delay={0.4} threshold={0}>
                        <SocialIcons />
                    </ScrollAnimate>
                </div>
            </div>
        </ScrollAnimate>
    );
}

export default ProfileAvatar;
