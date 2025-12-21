import Blog from "@/app/(default)/(home)/components/Award/components/Blog/Blog";
import Experiment from "@/app/(default)/(home)/components/Award/components/Experiment/Experiment";
import Quote from "@/app/(default)/(home)/components/Award/components/Quote/Quote";

function Award() {
    return (
        <div className="app-container py-10">
            <div className="grid h-112.5 grid-cols-3 gap-3">
                <Blog />
                <Quote />
                <Experiment />
            </div>
        </div>
    );
}

export default Award;
