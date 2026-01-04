"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type TabItemProps = {
    question: string;
    answer: string;
    defaultOpen?: boolean;
};

export default function TabItem({
    question,
    answer,
    defaultOpen,
}: TabItemProps) {
    const [open, setOpen] = useState(!!defaultOpen);

    return (
        <div
            className="cursor-pointer rounded-2xl p-4"
            onClick={() => setOpen(!open)}
        >
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
                <span className="text-md text-left font-medium text-black sm:text-lg">
                    {question}
                </span>

                {/* Icon rotate */}
                <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <Plus
                        size={25}
                        strokeWidth={1.2}
                        className="text-gray-500"
                    />
                </motion.span>
            </div>

            {/* Body */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                    >
                        <p className="mt-2 py-2 text-left text-[15px] text-gray-700">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
