import { images } from "@/assets/images";
import Image from "next/image";

function Me() {
    return (
        <div className="app-container mt-20 grid grid-cols-12 gap-10">
            <div className="col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                    <Image
                        src={images.withBg}
                        alt="Le Thanh Dat"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </div>
            </div>

            <div className="col-span-7">
                <h1 className="mb-4 font-[Instrument_Sans] text-4xl font-medium tracking-tighter text-black">
                    I create strategic and visually compelling digital
                    experiences that balance function and aesthetics
                </h1>
                <p className="my-4 text-lg text-neutral-700">
                    As a digital product designer, my focus is on creating
                    intuitive user interfaces, seamless interactions, and
                    cohesive brand identities that drive engagement and enhance
                    usability. Whether it’s designing SaaS dashboards, mobile
                    apps, or high-performance websites, my approach combines
                    creativity with a deep understanding of user needs and
                    business goals
                </p>
                <p className="my-4 text-lg text-neutral-700">
                    Over the years, I’ve collaborated with startups, established
                    companies, and entrepreneurs to bring their ideas to life
                    through thoughtful design solutions. I believe that great
                    design goes beyond aesthetics—it solves problems, simplifies
                    complexity, and delivers meaningful experiences. From
                    concept to final execution, I ensure every project is
                    strategically crafted to leave a lasting impact
                </p>
            </div>
        </div>
    );
}

export default Me;
