import { experiences } from "@/app/(default)/about/components/Experiment/data";
import ExItem from "@/app/(default)/about/components/Experiment/ExItem";

function Experiment() {
    return (
        <div className="py-20">
            <div className="app-container">
                <h2 className="mb-10 text-4xl font-medium">
                    Kinh nghiệm làm việc
                </h2>

                <div className="space-y-2">
                    {experiences.map((item) => (
                        <ExItem
                            key={item.id}
                            role={item.role}
                            company={item.company}
                            time={item.time}
                            current={item.current}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experiment;
