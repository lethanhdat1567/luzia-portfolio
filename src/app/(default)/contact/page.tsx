import FeatureItem from "@/app/(default)/(home)/components/Feature/FeatureItem";
import ContactForm from "@/app/(default)/contact/ContactForm";
import ContactInfo from "@/app/(default)/contact/ContactInfo";

function Contact() {
    return (
        <div className="py-40 pt-30">
            <div className="app-container">
                <p className="mb-10 text-4xl font-medium text-gray-500">
                    Ready to create something amazing?{" "}
                    <strong className="font-medium text-black">
                        let’s talk!
                    </strong>
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
