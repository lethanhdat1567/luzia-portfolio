import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function CTA() {
    return (
        <div className="flex-1">
            <h2 className="max-w-sm text-2xl font-medium text-gray-400 md:text-3xl">
                Chia sẻ nhu cầu của bạn,{" "}
                <strong className="font-medium text-white">
                    tôi sẽ đồng hành và hỗ trợ tận tình
                </strong>
            </h2>

            <Link href={"/contact"}>
                <Button
                    variant="secondary"
                    size="default"
                    className="group mt-10 rounded-md p-6!"
                >
                    Nhận tư vấn ngay{" "}
                    <ArrowRight className="transition group-hover:translate-x-0.5" />
                </Button>
            </Link>
        </div>
    );
}

export default CTA;
