import { Button } from "@/components/ui/button";
import Link from "next/link";

function Email() {
    return (
        <div className="static right-10 bottom-60 z-10 max-w-none xl:absolute xl:max-w-md">
            <p className="mb-6 text-[15px] leading-relaxed font-normal text-gray-900">
                Chuyên viên tư vấn{" "}
                <strong className="text-amber-700">
                    Bất động sản tại Sài Gòn King Land
                </strong>
                , chuyên khu vực Quận 6. Với phương châm{" "}
                <strong className="text-gold">
                    "Bước đi chắc chắn, Đầu tư an toàn"
                </strong>
                , Phát đồng hành cùng khách hàng từ khâu khai thác nguồn nhà đến
                hỗ trợ pháp lý chuyên sâu, đảm bảo sự an tâm tuyệt đối cho mọi
                giao dịch.
            </p>
            <Link href={"/contact"}>
                <Button className="text-md bg-gold shadow-gold cursor-pointer rounded-2xl p-6 font-semibold text-white transition-all hover:scale-105 hover:shadow-xl">
                    Liên hệ ngay
                </Button>
            </Link>
        </div>
    );
}

export default Email;
