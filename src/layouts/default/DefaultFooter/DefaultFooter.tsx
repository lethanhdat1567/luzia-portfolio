import Background from "@/app/(default)/(home)/components/HowItWork/Background";
import CTA from "@/layouts/default/DefaultFooter/CTA";
import End from "@/layouts/default/DefaultFooter/End";
import Navlist from "@/layouts/default/DefaultFooter/Navlist";

function DefaultFooter() {
    return (
        <footer className="relative bg-black py-20 text-white">
            <div className="app-container relative z-10">
                <div className="mb-20 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
                    <CTA />
                    <Navlist />
                </div>
                <End />
            </div>
            <Background />
        </footer>
    );
}

export default DefaultFooter;
