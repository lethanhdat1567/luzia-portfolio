import Award from "@/app/(default)/(home)/components/Award/Award";
import Feature from "@/app/(default)/(home)/components/Feature/Feature";
import Hero from "@/app/(default)/(home)/components/Hero/Hero";
import Service from "@/app/(default)/(home)/components/Service/Service";

function HomePage() {
    return (
        <div>
            <Hero />
            <Feature />
            <Award />
            <Service />
        </div>
    );
}

export default HomePage;
