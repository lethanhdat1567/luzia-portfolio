import LenisWrapper from "@/components/Lenis/Lenis";
import { DefaultHeader } from "@/layouts/default/DefaultHeader";

function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <DefaultHeader />
            <LenisWrapper>
                <div>{children}</div>
            </LenisWrapper>
        </div>
    );
}

export default DefaultLayout;
