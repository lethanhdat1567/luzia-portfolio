import { Button } from "@/components/ui/button";

function Email() {
    return (
        <div className="absolute right-10 bottom-46 z-10 max-w-md">
            <p className="mb-6 text-[15px] font-normal text-neutral-800">
                As a digital product designer with a strong focus on visual
                design and Framer websites, he collaborates closely with teams
                to craft seamless, user-centered experiences. A reliable partner
                in bringing ideas to life
            </p>
            <Button className="text-md cursor-pointer rounded-2xl p-6 font-semibold shadow-xl">
                Email Me
            </Button>
        </div>
    );
}

export default Email;
