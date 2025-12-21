"use client";

import Particles from "@/components/Particles";
import Silk from "@/components/Silk";

function Background() {
    return (
        <div className="absolute h-full w-full">
            <Silk
                speed={5}
                scale={1}
                color="#555353"
                noiseIntensity={1.5}
                rotation={0}
            />
        </div>
    );
}

export default Background;
