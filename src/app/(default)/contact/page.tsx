import FeatureItem from "@/app/(default)/(home)/components/Feature/FeatureItem";
import ContactForm from "@/app/(default)/contact/ContactForm";
import ContactInfo from "@/app/(default)/contact/ContactInfo";

function Contact() {
    return (
        <div className="py-40 pt-30">
            <div className="app-container">
                <p className="mb-10 text-4xl font-medium text-gray-500">
                    Liên hệ với{" "}
                    <strong className="font-medium text-black">
                        Tuấn Phát
                    </strong>{" "}
                    để được tư vấn BĐS chuyên nghiệp
                </p>
                <div className="grid grid-cols-12 gap-4">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
}

export default Contact;
