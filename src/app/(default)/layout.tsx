import FooterBanner from "@/components/FooterBanner/FooterBanner";
import LenisWrapper from "@/components/Lenis/Lenis";
import DefaultFooter from "@/layouts/default/DefaultFooter/DefaultFooter";
import { DefaultHeader } from "@/layouts/default/DefaultHeader";

function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <LenisWrapper>
                <DefaultHeader />
                <div>{children}</div>
                <FooterBanner />
                <DefaultFooter />
            </LenisWrapper>
        </div>
    );
}

export default DefaultLayout;
