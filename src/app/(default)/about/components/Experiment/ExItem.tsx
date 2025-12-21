function ExItem({ current }: { current?: boolean }) {
    return (
        <div
            className={`flex items-center justify-between rounded-xl ${current ? "bg-[#7430f7] text-white shadow-xl" : "bg-neutral-100"} p-4`}
        >
            <h3 className="text-lg font-medium">Lead Product Designer</h3>
            <span
                className={`text-[15px] ${current ? "text-white" : "text-neutral-700"}`}
            >
                NeusPay
            </span>
            <span
                className={`text-[15px] ${current ? "text-white" : "text-neutral-700"}`}
            >
                2021 - Present
            </span>
        </div>
    );
}

export default ExItem;
