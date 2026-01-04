import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function CTA() {
    return (
        <div className="flex-1">
            <h2 className="max-w-sm text-2xl font-medium text-gray-400 md:text-3xl">
                Nếu có cơ hội, tôi mong muốn được học hỏi và đóng góp{" "}
                <strong className="font-medium text-white">
                    một phần nhỏ vào dự án và phát triển bản thân
                </strong>
            </h2>

            <Link href="/contact">
                <Button
                    variant="secondary"
                    size="default"
                    className="group mt-10 rounded-md p-6!"
                >
                    Tìm hiểu thêm về tôi
                    <ArrowRight className="transition group-hover:translate-x-0.5" />
                </Button>
            </Link>
        </div>
    );
}

export default CTA;
