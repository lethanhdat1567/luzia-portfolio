import Background from "@/app/(default)/(home)/components/HowItWork/Background";
import StepItem from "@/app/(default)/(home)/components/HowItWork/StepItem";
import { images } from "@/assets/images";
import Image from "next/image";

function HowItWork() {
    return (
        <div className="relative py-20">
            <Background />
            <div className="app-container relative z-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-5">
                        <h2 className="text-xl font-medium text-neutral-500">
                            How it works
                        </h2>
                    </div>
                    <div className="col-span-7">
                        <p className="text-3xl font-medium text-neutral-600">
                            <strong className="text-white">
                                A simple and efficient workflow to bring your
                                vision to life.
                            </strong>{" "}
                            From the first call to final delivery, every step is
                            designed for clarity and efficiency.
                        </p>
                        <div className="my-10 space-y-10">
                            <StepItem />
                            <StepItem isMove />
                            <StepItem />
                            <StepItem isMove />
                            <StepItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWork;
