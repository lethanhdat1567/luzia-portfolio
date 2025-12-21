import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function IntroContent() {
    return (
        <div>
            <div className="flex items-center gap-2">
                <h2 className="text-xl font-medium text-gray-600">FAQs</h2>
                <Separator />
            </div>
            <p className="mt-4 mb-10 text-3xl font-medium text-gray-500">
                Answers to common questions to help you understand{" "}
                <strong className="font-medium text-black">
                    the process and how we can work together
                </strong>
            </p>
            <Button size={"xl"} className="shadow-xl">
                Email me
            </Button>
        </div>
    );
}

export default IntroContent;
