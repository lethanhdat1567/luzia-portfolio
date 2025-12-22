import ContactForm from "@/app/(default)/contact/ContactForm";
import ContactInfo from "@/app/(default)/contact/ContactInfo";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { getSheetContent } from "@/lib/getSheetContent";

async function Contact() {
    const content = await getSheetContent("Contact");

    return (
        <div className="py-20 lg:py-40">
            <div className="app-container">
                <ScrollAnimate direction="down">
                    <p className="mb-10 text-2xl font-medium text-gray-500 md:text-3xl lg:text-4xl">
                        {content.contact_title}
                    </p>
                </ScrollAnimate>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                    <div className="col-span-1 lg:col-span-7">
                        <ScrollAnimate direction="right">
                            <ContactForm />
                        </ScrollAnimate>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 lg:col-span-5">
                        <ScrollAnimate direction="left">
                            <ContactInfo />
                        </ScrollAnimate>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
