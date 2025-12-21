import { ScreenShareOffIcon } from "lucide-react";

function ServiceItemHead() {
    return (
        <>
            <h3 className="text-xl font-medium">Branding Design</h3>
            <span className="rounded-md bg-yellow-50 p-2">
                <ScreenShareOffIcon size={20} className="text-yellow-500" />
            </span>
        </>
    );
}

export default ServiceItemHead;
