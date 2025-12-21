import { images } from "@/assets/images";
import { Quote as QuoteIcon } from "lucide-react";
import Image from "next/image";

function Quote() {
    return (
        <div className="flex h-full w-full cursor-pointer flex-col justify-between overflow-hidden rounded-4xl bg-black p-8 text-white">
            {/* Quote icon */}
            <div>
                <QuoteIcon
                    className="text-neutral-600"
                    strokeWidth={1.5}
                    size={40}
                />

                {/* Quote text */}
                <p className="mt-6 text-[22px]">
                    Carter's design expertise goes beyond aesthetics—he crafts
                    experiences that truly connect with users. A great
                    collaborator and a problem-solver at heart
                </p>
            </div>

            {/* Author info */}
            <div className="mt-8 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white">
                    <Image
                        src={images.smallAvatar}
                        alt="Samantha"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <p className="font-semibold">Samantha</p>
                    <p className="text-sm text-neutral-400">
                        Founder at NexaTech
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Quote;
