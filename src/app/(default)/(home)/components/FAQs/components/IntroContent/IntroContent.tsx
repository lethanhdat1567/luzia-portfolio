import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function IntroContent() {
    return (
        <div>
            <div className="flex w-full items-center gap-2">
                <h2 className="shrink-0 text-xl font-medium text-gray-600">
                    Cam kết
                </h2>
                <Separator className="w-[90%]!" />
            </div>
            <p className="mt-4 mb-10 text-3xl font-medium text-gray-500">
                Tôi đồng hành cùng bạn trong việc{" "}
                <strong className="font-medium text-black">
                    lựa chọn, đánh giá và giao dịch bất động sản
                </strong>{" "}
                với tiêu chí rõ ràng về pháp lý, tiềm năng và giá trị lâu dài.
            </p>

            <Button size={"xl"} className="shadow-xl">
                Liên hệ tôi
            </Button>
        </div>
    );
}

export default IntroContent;
