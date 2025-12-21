import Link from "next/link";
import React from "react";

function ContactBtn() {
    return (
        <Link href={"/contact"}>
            <div className="hidden items-center justify-center bg-white lg:flex">
                <div className="group relative">
                    <button className="relative inline-block cursor-pointer rounded-xl bg-gray-800 p-px font-medium text-white shadow-lg shadow-gray-400 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-gray-500 active:scale-95">
                        <span className="absolute inset-0 rounded-xl bg-linear-to-r from-gray-200 via-white to-gray-300 p-0.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <span className="relative z-10 block rounded-xl bg-black px-5 py-2.5">
                            <div className="relative z-10 flex items-center space-x-2">
                                <span className="text-sm transition-all duration-500 group-hover:translate-x-1 group-hover:text-gray-200">
                                    Liên hệ tư vấn
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4 transition-all duration-500 group-hover:translate-x-1 group-hover:text-gray-200"
                                >
                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                </svg>
                            </div>
                        </span>
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default ContactBtn;
