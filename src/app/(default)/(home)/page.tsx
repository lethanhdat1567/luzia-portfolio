import FAQs from "@/app/(default)/(home)/components/FAQs/FAQs";
import Hero from "@/app/(default)/(home)/components/Hero/Hero";
import HowItWork from "@/app/(default)/(home)/components/HowItWork/HowItWork";
import Info from "@/app/(default)/(home)/components/Info/Info";
import Service from "@/app/(default)/(home)/components/Service/Service";

async function HomePage() {
    return (
        <div>
            <Hero />
            <Info withBg />
            {/* <Feature /> */}
            {/* <Award /> */}
            <Service />
            <HowItWork />
            <FAQs />
        </div>
    );
}

export default HomePage;
