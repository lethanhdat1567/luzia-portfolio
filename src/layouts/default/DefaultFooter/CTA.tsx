import { Button } from "@/components/ui/button";

function CTA() {
    return (
        <div className="flex-1">
            <h2 className="max-w-sm text-3xl font-medium text-gray-400">
                Book a call,{" "}
                <strong className="font-medium text-white">
                    and I’ll take care of the rest
                </strong>
            </h2>
            <Button
                variant={"secondary"}
                size={"default"}
                className="mt-10 rounded-2xl px-7 py-6"
            >
                Book a call
            </Button>
        </div>
    );
}

export default CTA;
