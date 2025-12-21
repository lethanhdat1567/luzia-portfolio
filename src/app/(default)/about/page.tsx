import FAQs from "@/app/(default)/(home)/components/FAQs/FAQs";
import Experiment from "@/app/(default)/about/components/Experiment/Experiment";
import { meData } from "@/app/(default)/about/components/Me/data";
import Me from "@/app/(default)/about/components/Me/Me";

function About() {
    return (
        <div className="py-30">
            <div className="app-container">
                <p className="mb-10 max-w-3xl text-4xl font-medium text-gray-500">
                    Tôi là Tuấn Phát,{" "}
                    <strong className="font-medium text-black">
                        người đồng hành cùng khách hàng trong việc lựa chọn và
                        giao dịch bất động sản
                    </strong>{" "}
                    với tiêu chí minh bạch, an toàn và giá trị lâu dài.
                </p>
            </div>
            {meData.map((item) => (
                <Me
                    key={item.id}
                    direction={item.direction}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                />
            ))}
            <Experiment />
            <FAQs />
        </div>
    );
}

export default About;
