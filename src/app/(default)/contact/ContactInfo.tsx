import SocialIcons from "@/app/(default)/contact/ContactIcons";
import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function ContactInfo() {
    return (
        <div className="col-span-4">
            <div className="flex h-133 w-full flex-col justify-between rounded-3xl bg-neutral-100 p-8 shadow-lg">
                {/* Profile Image */}
                <div className="mb-8">
                    <div className="h-24 w-24 overflow-hidden rounded-3xl bg-black">
                        <Image
                            alt="Thanh Dat"
                            src={images.smallAvatar}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                {/* Heading */}
                <p className="text-md text-gray-600">
                    Prefer a quick chat? Let’s hop on a call and explore the
                    best way to bring your ideas to life
                </p>
                <SocialIcons />
                <Button className="mt-auto w-full" size={"xl"}>
                    Contact Me
                </Button>
            </div>
        </div>
    );
}

export default ContactInfo;
