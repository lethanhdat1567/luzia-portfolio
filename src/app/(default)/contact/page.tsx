import FeatureItem from "@/app/(default)/(home)/components/Feature/FeatureItem";
import ContactForm from "@/app/(default)/contact/ContactForm";
import ContactInfo from "@/app/(default)/contact/ContactInfo";

function Contact() {
    return (
        <div className="py-20 lg:py-40">
            <div className="app-container">
                <p className="mb-10 text-3xl font-medium text-gray-500 sm:text-4xl">
                    Liên hệ với{" "}
                    <strong className="font-medium text-black">
                        Tuấn Phát
                    </strong>{" "}
                    để được tư vấn BĐS chuyên nghiệp
                </p>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                    {/* Form */}
                    <div className="col-span-1 lg:col-span-7">
                        <ContactForm />
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 lg:col-span-5">
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
