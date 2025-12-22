import Banner from "@/app/(default)/(home)/components/Hero/Banner";
import Email from "@/app/(default)/(home)/components/Hero/Email";
import Project from "@/app/(default)/(home)/components/Hero/Project";

function Hero() {
    return (
        <div className="relative mt-(--header-h) flex min-h-[80vh] w-screen flex-col items-start justify-between overflow-hidden px-4 sm:px-6 md:px-10 xl:min-h-[calc(100vh-var(--header-h))]">
            <div>
                <Project />
                <Email />
            </div>
            <Banner />
        </div>
    );
}

export default Hero;
