"use client";

import { useState } from "react";

function ContactForm() {
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

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        // Handle form submission
    };

    return (
        <div className="col-span-8">
            <div className="w-full rounded-3xl border border-white/5 bg-gradient-to-br from-neutral-900 to-black p-8 shadow-2xl">
                {/* Name Field */}
                <div className="mb-5">
                    <label className="mb-2 block text-xs font-light tracking-wide text-white/60 uppercase">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
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
                        placeholder="yourname@gmail.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white backdrop-blur-sm transition-all placeholder:text-white/30 focus:bg-white/10 focus:ring-1 focus:ring-white/20 focus:outline-none"
                    />
                </div>

                {/* Message Field */}
                <div className="mb-6">
                    <label className="mb-2 block text-xs font-light tracking-wide text-white/60 uppercase">
                        Your Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows={8}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white backdrop-blur-sm transition-all placeholder:text-white/30 focus:bg-white/10 focus:ring-1 focus:ring-white/20 focus:outline-none"
                    />
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className="group relative w-full overflow-hidden rounded-xl bg-white py-3.5 text-sm font-medium text-black transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                >
                    <span className="relative z-10">Submit</span>
                    <div className="absolute inset-0 bg-linear-to-r from-neutral-100 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
            </div>
        </div>
    );
}

export default ContactForm;
