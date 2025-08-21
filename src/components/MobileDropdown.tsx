// components/MobileDropdown.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Props type
interface MobileDropdownProps {
  title: string;
  items: { label: string; href: string }[];
  setIsOpen: (value: boolean) => void;
}

export default function MobileDropdown({
  title,
  items,
  setIsOpen,
}: MobileDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left text-white font-semibold text-sm"
      >
        {title}
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pl-4 mt-2 space-y-2"
          >
            {items.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-white text-sm hover:text-blue-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
