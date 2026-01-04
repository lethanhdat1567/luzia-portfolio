import TabItem from "./TabItem";

const aboutMindsetData = [
    {
        title: "Định hướng phát triển",
        content:
            "Tôi mong muốn học hỏi và phát triển lâu dài trong lĩnh vực bất động sản, bắt đầu từ việc hiểu thị trường, sản phẩm và quy trình làm việc thực tế.",
    },
    {
        title: "Tinh thần học hỏi",
        content:
            "Tôi chủ động tìm hiểu kiến thức mới, sẵn sàng tiếp thu góp ý và không ngại bắt đầu từ những công việc cơ bản.",
    },
    {
        title: "Thái độ làm việc",
        content:
            "Tôi đề cao sự kỷ luật, trách nhiệm và cam kết hoàn thành công việc được giao đúng thời hạn.",
    },
    {
        title: "Giá trị mang lại",
        content:
            "Tôi mong muốn hỗ trợ đội nhóm bằng sự chăm chỉ, khả năng tổng hợp thông tin và tinh thần hợp tác.",
    },
    {
        title: "Mục tiêu khi thực tập",
        content:
            "Tích lũy kinh nghiệm thực tế, hiểu sâu hơn về nghề và tạo nền tảng vững chắc cho sự nghiệp bất động sản sau này.",
    },
];

export default function Tabs() {
    return (
        <div>
            {aboutMindsetData.map((item, index) => (
                <TabItem
                    key={index}
                    question={item.title}
                    answer={item.content}
                    defaultOpen={index === 0}
                />
            ))}
        </div>
    );
}
