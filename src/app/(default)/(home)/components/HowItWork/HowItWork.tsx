"use client";

import Background from "@/app/(default)/(home)/components/HowItWork/Background";
import { steps } from "@/app/(default)/(home)/components/HowItWork/data";
import StepItem from "@/app/(default)/(home)/components/HowItWork/StepItem";

function HowItWork() {
    return (
        <div className="relative bg-black">
            <Background />
            <div className="app-container relative z-10 py-16 sm:py-20 lg:py-24">
                <div className="grid grid-cols-1 gap-y-8 sm:px-6 lg:gap-x-8 xl:grid-cols-12">
                    {/* Title */}
                    <div className="xl:col-span-5">
                        <h2 className="text-2xl font-medium text-white sm:text-3xl">
                            Quy trình làm việc
                        </h2>
                    </div>

                    {/* Description + Steps */}
                    <div className="xl:col-span-7">
                        <p className="text-xl font-medium text-white sm:text-2xl lg:text-3xl">
                            Tôi đảm bảo quy trình rõ ràng và minh bạch, giúp
                            khách hàng nắm từng bước từ tìm nhà đến hoàn tất
                            giao dịch.
                        </p>

                        <div className="mt-8 flex flex-col items-center space-y-6 sm:mt-10 sm:space-y-8 lg:space-y-10 xl:block">
                            {steps.map((step, index) => (
                                <StepItem
                                    key={step.id}
                                    index={step.id}
                                    title={step.title}
                                    description={step.description}
                                    isMove={index % 2 === 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWork;
