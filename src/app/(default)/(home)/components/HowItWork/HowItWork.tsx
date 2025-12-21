import Background from "@/app/(default)/(home)/components/HowItWork/Background";
import { steps } from "@/app/(default)/(home)/components/HowItWork/data";
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
                            Quy trình làm việc
                        </h2>
                    </div>
                    <div className="col-span-7">
                        <p className="text-3xl font-medium text-neutral-600">
                            <strong className="text-white">
                                Quy trình rõ ràng, minh bạch và hiệu quả
                            </strong>{" "}
                            giúp khách hàng dễ dàng theo dõi từng bước, từ việc
                            xác định nhu cầu đến khi hoàn tất giao dịch và nhận
                            bàn giao.
                        </p>

                        <div className="my-10 space-y-10">
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
