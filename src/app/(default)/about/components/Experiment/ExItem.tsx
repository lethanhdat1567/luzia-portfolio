type ExItemProps = {
    role: string;
    company: string;
    time: string;
    current?: boolean;
};

function ExItem({ role, company, time, current }: ExItemProps) {
    return (
        <div
            className={`grid grid-cols-12 items-center rounded-xl p-4 ${
                current ? "bg-[#7430f7] text-white shadow-xl" : "bg-neutral-100"
            }`}
        >
            <h3 className="col-span-4 truncate text-lg font-medium">{role}</h3>

            <span
                className={`col-span-4 truncate text-right text-[15px] ${
                    current ? "text-white" : "text-neutral-700"
                }`}
            >
                {company}
            </span>

            <span
                className={`col-span-4 text-right text-[15px] ${
                    current ? "text-white" : "text-neutral-700"
                }`}
            >
                {time}
            </span>
        </div>
    );
}

export default ExItem;
