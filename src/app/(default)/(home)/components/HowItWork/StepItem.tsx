type StepItemProps = {
    index: number;
    title: string;
    description: string;
    isMove?: boolean;
};

function StepItem({ index, title, description, isMove }: StepItemProps) {
    return (
        <div
            className={`max-w-md rounded-4xl border border-neutral-800 bg-[#111] p-6 ${
                isMove ? "translate-x-1/2" : ""
            }`}
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-b from-[#1f1f1f] to-[#111] font-[Instrument_Sans] text-2xl font-medium text-neutral-500">
                {index}
            </div>

            <h3 className="mt-6 mb-4 text-2xl font-medium text-white">
                {title}
            </h3>

            <p className="text-[15px] text-neutral-500">{description}</p>
        </div>
    );
}

export default StepItem;
