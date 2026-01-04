import FAQs from "@/app/(default)/(home)/components/FAQs/FAQs";
import Experiment from "@/app/(default)/about/components/Experiment/Experiment";
import Gallery from "@/app/(default)/about/components/Gallery/Gallery";
import { meData } from "@/app/(default)/about/components/Me/data";
import Me from "@/app/(default)/about/components/Me/Me";
import Profile from "@/app/(default)/about/components/Profile/Profile";
import { getSheetContent } from "@/lib/getSheetContent";

async function About() {
    const content = await getSheetContent("About");

    const companyList = JSON.parse(content.company_list) || [];

    return (
        <div className="pt-30">
            <Profile />
            <Experiment />
            {meData.map((item: any, index: number) => (
                <Me
                    key={item.id}
                    direction={item.direction}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    index={index}
                />
            ))}
            <Gallery />
        </div>
    );
}

export default About;
