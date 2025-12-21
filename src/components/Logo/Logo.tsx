import Link from "next/link";

function Logo() {
    return (
        <Link href={"/"}>
            <div className="px-4 py-2">
                <p className="cursor-pointer font-[Instrument_Sans] text-xl font-medium tracking-tight text-gray-900 transition duration-500 hover:opacity-40">
                    Michael Carter
                </p>
            </div>
        </Link>
    );
}

export default Logo;
