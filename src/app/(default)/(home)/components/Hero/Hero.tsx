import Banner from "@/app/(default)/(home)/components/Hero/Banner";
import Email from "@/app/(default)/(home)/components/Hero/Email";
import Project from "@/app/(default)/(home)/components/Hero/Project";

function Hero() {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <Project />
            <Email />
            <Banner />
        </div>
    );
}

export default Hero;
