import Award from "@/app/(default)/(home)/components/Award/Award";
import FAQs from "@/app/(default)/(home)/components/FAQs/FAQs";
import Feature from "@/app/(default)/(home)/components/Feature/Feature";
import Hero from "@/app/(default)/(home)/components/Hero/Hero";
import HowItWork from "@/app/(default)/(home)/components/HowItWork/HowItWork";
import Service from "@/app/(default)/(home)/components/Service/Service";

function HomePage() {
    return (
        <div>
            <Hero />
            <Feature />
            <Award />
            <Service />
            <HowItWork />
            <FAQs />
        </div>
    );
}

export default HomePage;
