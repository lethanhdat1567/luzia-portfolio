import ExItem from "@/app/(default)/about/components/Experiment/ExItem";

function Experiment() {
    return (
        <div className="py-30">
            <div className="app-container">
                <h2 className="mb-10 text-4xl font-medium">Work experiences</h2>
                <div className="space-y-2">
                    <ExItem current />
                    <ExItem />
                    <ExItem />
                </div>
            </div>
        </div>
    );
}

export default Experiment;
