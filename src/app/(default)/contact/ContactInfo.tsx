import SocialIcons from "@/app/(default)/contact/ContactIcons";
import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { getSheetContent } from "@/lib/getSheetContent";
import { convertDriveLinkToDirect } from "@/lib/upload";
import { Phone, GraduationCap, Mail } from "lucide-react";
import Image from "next/image";

async function ContactInfo() {
    const contact = await getSheetContent("Contact");

    return (
        <div className="col-span-4">
            <div className="flex h-133 w-full flex-col justify-between rounded-3xl bg-linear-to-br from-neutral-50 to-neutral-100 p-8 shadow-xl">
                {/* Ảnh đại diện */}
                <div>
                    <div className="mb-6">
                        <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-black shadow-lg">
                            <Image
                                alt="Tuấn Phát"
                                src={
                                    convertDriveLinkToDirect(
                                        contact.contact_avatar,
                                    ) || ""
                                }
                                width={100}
                                height={100}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Thông tin liên hệ - List style */}
                    <ul className="mb-8 space-y-3.5">
                        <li className="group flex items-center gap-3.5 border-l-2 border-gray-300 pl-4 transition-all hover:border-gray-900">
                            <GraduationCap className="h-5 w-5 shrink-0 text-gray-600" />
                            <span className="text-sm font-medium text-gray-800">
                                {contact.contact_study_at}
                            </span>
                        </li>

                        <li className="group flex items-center gap-3.5 border-l-2 border-gray-300 pl-4 transition-all hover:border-gray-900">
                            <Phone className="h-5 w-5 shrink-0 text-gray-600" />
                            <a
                                href="tel:+84911530101"
                                className="text-sm font-medium text-gray-800 transition-colors hover:text-gray-900"
                            >
                                {contact.contact_phone_number}
                            </a>
                        </li>

                        <li className="group flex items-center gap-3.5 border-l-2 border-gray-300 pl-4 transition-all hover:border-gray-900">
                            <Mail className="h-5 w-5 shrink-0 text-gray-600" />
                            <a
                                href={`mailto:${contact.contact_email}`}
                                className="text-sm font-medium break-all text-gray-800 transition-colors hover:text-gray-900"
                            >
                                {contact.contact_email}
                            </a>
                        </li>
                    </ul>
                    {/* Giới thiệu ngắn */}
                    <p className="text-sm leading-relaxed text-gray-700">
                        Ngoài việc gửi form, bạn có thể liên hệ tôi trực tiếp
                        qua số điện thoại, email hoặc các mạng xã hội dưới đây
                    </p>

                    {/* Mạng xã hội */}
                    <SocialIcons />
                </div>

                {/* CTA Button */}
                <a href={`tel:+${contact.phone_number}`} className="w-full">
                    <Button
                        className="mt-auto w-full transition-all duration-300 hover:shadow-xl"
                        size="xl"
                    >
                        <span className="font-semibold">Gọi ngay</span>
                        <Phone className="h-5 w-5" />
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default ContactInfo;
