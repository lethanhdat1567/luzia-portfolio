"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { toast } from "sonner";

function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // ✅ Validate cơ bản
    const validate = () => {
        if (!formData.name.trim()) return "Vui lòng nhập họ tên";
        if (!formData.email.trim()) return "Vui lòng nhập email";
        if (!formData.message.trim()) return "Vui lòng nhập tin nhắn";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) return "Email không hợp lệ";

        return null;
    };

    const handleSubmit = async () => {
        if (loading) return;

        const errorMsg = validate();
        if (errorMsg) {
            setError(errorMsg);
            return;
        }

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
        if (!accessKey) {
            console.error("Missing NEXT_PUBLIC_WEB3FORMS_KEY");
            toast.error("Cấu hình hệ thống chưa sẵn sàng");
            return;
        }

        setError(null);
        setLoading(true);

        try {
            const data = new FormData();
            data.append("access_key", accessKey);
            data.append("subject", `📩 ${formData.name} đã liên hệ từ website`);
            data.append("from_name", "Website Contact");
            data.append("replyto", formData.email);
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append(
                "message",
                `
                    👤 Họ tên: ${formData.name}
                    📧 Email: ${formData.email}

                    💬 Nội dung:
                    ${formData.message}
            `.trim(),
            );

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });

            const { success } = await res.json();

            if (!success) throw new Error("Submit failed");

            setFormData({ name: "", email: "", message: "" });
            toast.success("Đã gửi thông tin thành công 🎉");
        } catch (error) {
            console.error(error);
            setError("Có lỗi xảy ra, vui lòng thử lại");
            toast.error("Gửi thất bại 😢");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col-span-8">
            <div className="w-full rounded-3xl border border-white/5 bg-linear-to-br from-neutral-900 to-black p-8 shadow-2xl">
                {/* Name Field */}
                <div className="mb-5">
                    <label className="mb-2 block text-xs font-light tracking-wide text-white/60 uppercase">
                        Họ và tên
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white backdrop-blur-sm transition-all placeholder:text-white/30 focus:bg-white/10 focus:ring-1 focus:ring-white/20 focus:outline-none"
                    />
                </div>

                {/* Email Field */}
                <div className="mb-5">
                    <label className="mb-2 block text-xs font-light tracking-wide text-white/60 uppercase">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tenban@gmail.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white backdrop-blur-sm transition-all placeholder:text-white/30 focus:bg-white/10 focus:ring-1 focus:ring-white/20 focus:outline-none"
                    />
                </div>

                {/* Message Field */}
                <div className="mb-6">
                    <label className="mb-2 block text-xs font-light tracking-wide text-white/60 uppercase">
                        Tin nhắn của bạn
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Nhập tin nhắn của bạn"
                        rows={8}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white backdrop-blur-sm transition-all placeholder:text-white/30 focus:bg-white/10 focus:ring-1 focus:ring-white/20 focus:outline-none"
                    />
                </div>

                {/* Error message (không ảnh hưởng UI chính) */}
                {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

                {/* Submit Button */}
                <Button
                    onClick={handleSubmit}
                    variant={"secondary"}
                    disabled={loading}
                    className="w-full p-5"
                >
                    {loading ? (
                        <div className="text-md flex items-center gap-4">
                            <Spinner /> Đang gửi...
                        </div>
                    ) : (
                        <span className="relative z-10">Gửi</span>
                    )}
                </Button>
            </div>
        </div>
    );
}

export default ContactForm;
