import FAQs from "@/app/(default)/(home)/components/FAQs/FAQs";
import Info from "@/app/(default)/(home)/components/Info/Info";
import AboutComment from "@/app/(default)/about/components/Comment/Comment";
import Experiment from "@/app/(default)/about/components/Experiment/Experiment";
import Me from "@/app/(default)/about/components/Me/Me";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";
import { getSheetContent } from "@/lib/getSheetContent";

async function About() {
    const content = await getSheetContent("About");

    const companyList = JSON.parse(content.company_list) || [];

    return (
        <div className="pt-30">
            <div className="app-container">
                <ScrollAnimate direction="down">
                    <p className="mb-10 max-w-3xl text-xl font-medium text-gray-500 sm:text-2xl lg:text-4xl">
                        {content.info_title}
                    </p>
                </ScrollAnimate>
            </div>
            <AboutComment />
            <Info />
            <Experiment />
            {/* {companyList.map((item: any, index: number) => (
                <Me
                    key={item.id}
                    direction={item.direction}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    index={index}
                />
            ))} */}
            <FAQs />
        </div>
    );
}

export default About;
