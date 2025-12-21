"use client";

import Background from "@/layouts/default/DefaultFooter/Background";
import CTA from "@/layouts/default/DefaultFooter/CTA";
import End from "@/layouts/default/DefaultFooter/End";
import Navlist from "@/layouts/default/DefaultFooter/Navlist";

function DefaultFooter() {
    return (
        <footer className="relative bg-black py-16 text-white sm:py-20 lg:py-24">
            <div className="app-container relative z-10">
                {/* Top section: CTA + Navlist */}
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
                    <CTA />
                    <Navlist />
                </div>

                {/* End section */}
                <div className="mt-12 sm:mt-16">
                    <End />
                </div>
            </div>

            {/* Background */}
            <Background />
        </footer>
    );
}

export default DefaultFooter;
