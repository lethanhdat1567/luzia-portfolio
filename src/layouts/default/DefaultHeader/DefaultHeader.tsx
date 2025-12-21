import { Logo } from "@/components/Logo";
import ContactBtn from "@/layouts/default/DefaultHeader/ContactBtn";
import Navbar from "@/layouts/default/DefaultHeader/Navbar";
import Sidebar from "@/layouts/default/DefaultHeader/Sidebar";

function DefaultLayout() {
    return (
        <div className="fixed top-0 z-99999 flex h-(--header-h) w-screen items-center justify-between bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
            <Logo />
            <Navbar />
            <ContactBtn />
            <Sidebar />
        </div>
    );
}

export default DefaultLayout;
