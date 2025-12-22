import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
            <h1 className="text-8xl font-extrabold text-gray-200 select-none sm:text-9xl md:text-[10rem]">
                404
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl">
                Trang không tồn tại
            </h2>
            <p className="mt-2 max-w-md text-gray-500">
                Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm. Hãy
                quay về trang chủ.
            </p>
            <Link
                href="/"
                className="mt-8 inline-block rounded-lg bg-gray-900 px-6 py-3 font-medium tracking-wide text-white transition-all hover:bg-gray-800"
            >
                Quay về trang chủ
            </Link>
        </div>
    );
}
