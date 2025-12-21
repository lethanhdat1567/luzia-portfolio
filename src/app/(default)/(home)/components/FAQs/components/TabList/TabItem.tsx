"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function TabItem() {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="cursor-pointer rounded-2xl bg-white p-4"
            onClick={() => setOpen(!open)}
        >
            <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-black">
                    What’s your typical project timeline?
                </span>

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

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                    >
                        <p className="mt-2 py-2 text-left text-[15px] text-gray-400">
                            The timeline depends on the project’s scope and
                            complexity. Branding and UI/UX projects usually take
                            2–6 weeks, while Framer website development can
                            range from 1–4 weeks. I’ll provide a detailed
                            timeline after the project brief.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default TabItem;
