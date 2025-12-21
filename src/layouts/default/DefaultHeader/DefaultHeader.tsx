import { Logo } from "@/components/Logo";
import ContactBtn from "@/layouts/default/DefaultHeader/ContactBtn";
import Navbar from "@/layouts/default/DefaultHeader/Navbar";

function DefaultLayout() {
    return (
        <div className="fixed top-0 z-99999 flex h-(--header-h) w-screen items-center justify-between bg-white px-10">
            <Logo />
            <Navbar />
            <ContactBtn />
        </div>
    );
}

export default DefaultLayout;
