import { Button } from "@/components/ui/button";
import Link from "next/link";

function CTA() {
    return (
        <div className="flex-1">
            <h2 className="max-w-sm text-3xl font-medium text-gray-400">
                Trao đổi nhu cầu của bạn,{" "}
                <strong className="font-medium text-white">
                    tôi sẽ hỗ trợ từ A đến Z
                </strong>
            </h2>

            <Link href={"/contact"}>
                <Button
                    variant="secondary"
                    size="default"
                    className="mt-10 rounded-2xl px-7 py-6"
                >
                    Liên hệ tư vấn
                </Button>
            </Link>
        </div>
    );
}

export default CTA;
