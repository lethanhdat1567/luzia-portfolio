import { Logo } from "@/components/Logo";
import ContactBtn from "@/layouts/default/DefaultHeader/ContactBtn";
import Navbar from "@/layouts/default/DefaultHeader/Navbar";

function DefaultLayout() {
    return (
        <div className="flex h-(--header-h) items-center justify-between px-10">
            <Logo />
            <Navbar />
            <ContactBtn />
        </div>
    );
}

export default DefaultLayout;
