import FAQs from "@/app/(default)/(home)/components/FAQs/FAQs";
import Experiment from "@/app/(default)/about/components/Experiment/Experiment";
import Gallery from "@/app/(default)/about/components/Gallery/Gallery";
import Me from "@/app/(default)/about/components/Me/Me";

function About() {
    return (
        <div className="py-30">
            <div className="app-container">
                <p className="mb-10 max-w-3xl text-4xl font-medium text-gray-500">
                    Michael Carter crafts strategic, visually compelling digital
                    experiences{" "}
                    <strong className="font-medium text-black">
                        that drive impact and engagement
                    </strong>
                </p>
            </div>
            <Me />
            <Gallery />
            <Experiment />
            <FAQs />
        </div>
    );
}

export default About;
