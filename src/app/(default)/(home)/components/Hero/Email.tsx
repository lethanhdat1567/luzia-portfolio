import { Button } from "@/components/ui/button";
import Link from "next/link";

function Email() {
    return (
        <div className="absolute right-10 bottom-46 z-10 max-w-md">
            <p className="mb-6 text-[15px] font-normal text-neutral-800">
                Chuyên viên tư vấn <strong>Bất động sản</strong> tại Sài Gòn
                King Land, chuyên khu vực Quận 6. Với phương châm{" "}
                <strong>"Bước đi chắc chắn, Đầu tư an toàn"</strong>, Phát đồng
                hành cùng khách hàng từ khâu khai thác nguồn nhà đến hỗ trợ pháp
                lý chuyên sâu, đảm bảo sự an tâm tuyệt đối cho mọi giao dịch.
            </p>
            <Link href={"/contact"}>
                <Button className="text-md cursor-pointer rounded-2xl p-6 font-semibold shadow-xl">
                    Liên hệ ngay
                </Button>
            </Link>
        </div>
    );
}

export default Email;
