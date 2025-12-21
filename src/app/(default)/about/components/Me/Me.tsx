import { images } from "@/assets/images";
import Image from "next/image";

function Me() {
    return (
        <div className="app-container mt-20 grid grid-cols-12 gap-10">
            <div className="col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                    <Image
                        src={images.withBg}
                        alt="Tuấn Phát"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </div>
            </div>

            <div className="col-span-7">
                <h1 className="mb-4 font-[Instrument_Sans] text-4xl font-medium tracking-tighter text-black">
                    Tôi đồng hành cùng khách hàng trong việc lựa chọn và giao
                    dịch bất động sản một cách an toàn và minh bạch
                </h1>

                <p className="my-4 text-lg text-neutral-700">
                    Với sự am hiểu về thị trường, pháp lý và nhu cầu thực tế của
                    khách hàng, tôi tập trung vào việc tư vấn các dự án, nhà phố
                    và đất nền có tính thanh khoản tốt, pháp lý rõ ràng và giá
                    trị khai thác lâu dài. Mỗi sản phẩm được giới thiệu đều trải
                    qua quá trình sàng lọc và đánh giá kỹ lưỡng trước khi đến
                    tay người mua.
                </p>

                <p className="my-4 text-lg text-neutral-700">
                    Trong suốt quá trình làm việc, tôi luôn đặt sự minh bạch, an
                    toàn và lợi ích lâu dài của khách hàng lên hàng đầu. Từ giai
                    đoạn tìm hiểu, lựa chọn sản phẩm cho đến khi hoàn tất giao
                    dịch, tôi cam kết đồng hành và hỗ trợ đầy đủ để khách hàng
                    có thể đưa ra quyết định đúng đắn và phù hợp với mục tiêu
                    của mình.
                </p>
            </div>
        </div>
    );
}

export default Me;
