import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const Button = ({ text, className, hoverText = null, file }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = "ThiHanResume.pdf";
    link.click();
    setShowModal(false);

    // ✅ Show toast
    toast.success("Resume downloaded successfully!");
    toast.duration(5);
  };

  const handleView = () => {
    window.open(file, "_blank");
    setShowModal(false);
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setShowModal(true)}
        className={`${className ?? ""} cta-wrapper`}
      >
        <div
          className="cta-button group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="cta-bg-circle" />
          <p className="cta-text">{!isHovered ? text : hoverText}</p>
          <div className="cta-arrow-wrapper">
            <img src="/src/assets/arrow-down.svg" alt="arrow" />
          </div>
        </div>
      </button>

      {/* Modal with Animation */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-80 text-center"
              initial={{ scale: 0.8, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                What would you like to do?
              </h2>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleView}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  View Online
                </button>
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Download
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 transition dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Button;
