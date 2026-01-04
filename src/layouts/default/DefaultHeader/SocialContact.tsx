import SocialIcons from "@/app/(default)/contact/ContactIcons";
import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

function SocialContact() {
    return (
        <div className="flex items-center justify-center">
            <SocialIcons small />
        </div>
    );
}

export default SocialContact;
