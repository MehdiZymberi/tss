'use client';
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DialogBtn({ caseStudy }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      {/* Lees meer knop */}
      <button
        className="text-base mt-4 text-left block sm:hidden font-display z-20"
        onClick={openDialog}
      >
        Lees meer
      </button>

      {/* Dialog als custom modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <motion.div
              className="relative w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg sm:p-8"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Sluitknop */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={closeDialog}
              >
                <span className="sr-only">Close</span>
                &times;
              </button>

              {/* Dialog content */}
              <div className="flex flex-col items-center">
                <div className="mb-4 h-16 w-16 rounded-full bg-gray-200">
                  <Image
                    src={caseStudy.imgsrc}
                    alt={caseStudy.alt}
                    className="h-full w-full rounded-full"
                  />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {caseStudy.title}
                </h3>
                <p className="text-center text-gray-600">{caseStudy.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
