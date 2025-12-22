import { experiences } from "@/app/(default)/about/components/Experiment/data";
import ExItem from "@/app/(default)/about/components/Experiment/ExItem";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";

function Experiment() {
    return (
        <div className="py-20 pb-30">
            <div className="app-container">
                <ScrollAnimate direction="right">
                    <h2 className="mb-6 text-2xl font-medium lg:text-4xl">
                        Kinh nghiệm làm việc
                    </h2>
                </ScrollAnimate>

                <div className="space-y-2">
                    {experiences.map((item, index) => (
                        <ScrollAnimate
                            key={item.id}
                            direction="up"
                            delay={index * 0.2}
                            threshold={0}
                        >
                            <ExItem
                                role={item.role}
                                company={item.company}
                                time={item.time}
                                current={item.current}
                            />
                        </ScrollAnimate>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experiment;
