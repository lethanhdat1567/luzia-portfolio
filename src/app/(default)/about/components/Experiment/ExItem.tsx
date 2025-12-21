type ExItemProps = {
    role: string;
    company: string;
    time: string;
    current?: boolean;
};

function ExItem({ role, company, time, current }: ExItemProps) {
    return (
        <div
            className={`grid grid-cols-1 items-center gap-2 rounded-xl p-4 sm:grid-cols-12 ${
                current ? "bg-gold text-white shadow-xl" : "bg-neutral-100"
            }`}
        >
            {/* Role */}
            <h3 className="col-span-1 truncate text-lg font-medium sm:col-span-4">
                {role}
            </h3>

            {/* Company & Time */}
            <div className="col-span-1 mt-2 grid grid-cols-2 gap-2 sm:col-span-8 sm:mt-0">
                <span
                    className={`truncate text-[15px] ${
                        current ? "text-white" : "text-neutral-700"
                    }`}
                >
                    {company}
                </span>
                <span
                    className={`truncate text-right text-[15px] ${
                        current ? "text-white" : "text-neutral-700"
                    }`}
                >
                    {time}
                </span>
            </div>
        </div>
    );
}

export default ExItem;
