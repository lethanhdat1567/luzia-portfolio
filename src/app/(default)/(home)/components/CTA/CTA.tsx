import Particles from "@/components/Particles";
import { Button } from "@/components/ui/button";
import { getSheetContent } from "@/lib/getSheetContent";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

async function CTA() {
    const content = await getSheetContent("Home");

    return (
        <div className="relative h-[60vh] w-screen bg-black text-white">
            <div className="absolute top-1/2 left-1/2 z-999 mx-auto max-w-2xl -translate-1/2 text-center">
                <h2 className="mb-6 text-3xl font-semibold">
                    {content.cta_title}
                </h2>
                <p className="text-md mb-10">{content.cta_desc}</p>
                <Link href={"/about"}>
                    <Button
                        variant={"outline"}
                        className="group rounded-full px-10! py-6! text-black"
                    >
                        Tìm hiểu thêm về tôi
                        <ChevronRight className="transition group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>

            <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
            />
        </div>
    );
}

export default CTA;
