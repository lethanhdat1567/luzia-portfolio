function StepItem({ isMove }: { isMove?: boolean }) {
    return (
        <div
            className={`max-w-md rounded-4xl border border-neutral-800 bg-[#111] p-6 ${isMove ? "translate-x-1/2" : ""}`}
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-b from-[#1f1f1f] to-[#111] font-[Instrument_Sans] text-2xl font-medium text-neutral-500">
                1
            </div>
            <h3 className="mt-6 mb-4 text-2xl font-medium text-white">
                Book a Call
            </h3>
            <p className="text-[15px] text-neutral-500">
                Let’s start with a conversation! We’ll discuss your goals,
                ideas, and how I can help bring them to life. This is where we
                align expectations and ensure a great fit
            </p>
        </div>
    );
}

export default StepItem;
