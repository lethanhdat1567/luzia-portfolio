import Particles from "@/components/Particles";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function CTA() {
    return (
        <div className="relative h-[60vh] w-screen bg-black text-white">
            <div className="absolute top-1/2 left-1/2 z-999999 mx-auto max-w-2xl -translate-1/2 text-center">
                <h2 className="mb-6 text-3xl font-semibold">
                    Tôi là Nguyên Tuấn Phát — Thực tập sinh Bất động sản
                </h2>
                <p className="text-md mb-10">
                    Tôi đang học hỏi và tích lũy kinh nghiệm trong lĩnh vực bất
                    động sản, mong muốn được kết nối, học tập và phát triển cùng
                    các anh chị trong ngành.
                </p>
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
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
        </div>
    );
}

export default CTA;
