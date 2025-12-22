import FAQs from "@/app/(default)/(home)/components/FAQs/FAQs";
import Info from "@/app/(default)/(home)/components/Info/Info";
import AboutComment from "@/app/(default)/about/components/Comment/Comment";
import Experiment from "@/app/(default)/about/components/Experiment/Experiment";
import { meData } from "@/app/(default)/about/components/Me/data";
import Me from "@/app/(default)/about/components/Me/Me";
import ScrollAnimate from "@/components/ScrollAnimate/ScrollAnimate";

function About() {
    return (
        <div className="pt-30">
            <div className="app-container">
                <ScrollAnimate direction="down">
                    <p className="mb-10 max-w-3xl text-xl font-medium text-gray-500 sm:text-2xl lg:text-4xl">
                        Tôi là Tuấn Phát,{" "}
                        <strong className="font-medium text-black">
                            người đồng hành cùng khách hàng trong việc lựa chọn
                            và giao dịch bất động sản
                        </strong>{" "}
                        với tiêu chí minh bạch, an toàn và giá trị lâu dài.
                    </p>
                </ScrollAnimate>
            </div>
            <AboutComment />
            <Info />
            <Experiment />
            {meData.map((item, index) => (
                <Me
                    key={item.id}
                    direction={item.direction}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    index={index}
                />
            ))}
            <FAQs />
        </div>
    );
}

export default About;
