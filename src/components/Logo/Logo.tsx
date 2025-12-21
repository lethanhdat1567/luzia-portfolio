import Link from "next/link";

function Logo() {
    return (
        <Link href={"/"}>
            <div className="">
                <p className="cursor-pointer text-xl font-medium tracking-tight text-gray-900 transition duration-500 hover:opacity-40">
                    TuanPhatSKL
                </p>
            </div>
        </Link>
    );
}

export default Logo;
