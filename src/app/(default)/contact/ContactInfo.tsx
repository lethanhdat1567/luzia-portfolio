import SocialIcons from "@/app/(default)/contact/ContactIcons";
import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

function ContactInfo() {
    return (
        <div className="col-span-4">
            <div className="flex h-133 w-full flex-col justify-between rounded-3xl bg-neutral-100 p-8 shadow-lg">
                {/* Ảnh đại diện */}
                <div className="mb-8">
                    <div className="h-24 w-24 overflow-hidden rounded-3xl bg-black">
                        <Image
                            alt="Tuấn Phát"
                            src={images.smallAvatar}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                {/* Giới thiệu ngắn */}
                <p className="text-md text-gray-600">
                    Ngoài việc gửi form, bạn có thể liên hệ tôi trực tiếp qua số
                    điện thoại, email hoặc các mạng xã hội dưới đây
                </p>

                {/* Mạng xã hội */}
                <SocialIcons />

                {/* Nút liên hệ */}
                <Button className="mt-auto w-full" size={"xl"}>
                    Gọi điện thoạ<i></i> <Phone />
                </Button>
            </div>
        </div>
    );
}

export default ContactInfo;
