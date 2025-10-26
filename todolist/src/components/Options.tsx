import React, { useState } from "react";
import { motion, AnimatePresence, spring } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Options: React.FC<{ setActiveTab: (tab: string) => void }> = ({
  setActiveTab,
}) => {
  const [openSlider, setOpenSlider] = useState(false);
  return (
    <>
      <MdOutlineKeyboardDoubleArrowRight
        size={30}
        onClick={() => setOpenSlider((prev) => !prev)}
      />
      <AnimatePresence>
        {openSlider && (
          <motion.div
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{
              x: -20,
              opacity: 0.5,
            }}
            exit={{
              x: -50,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              type: spring,
            }}
            className="bg-slate-300 flex gap-10 px-10 py-3 text-black font-bold rounded-md"
          >
            <button
              onClick={() => setActiveTab("items")}
              className="bg-slate-100 px-5 py-2 rounded-lg cursor-pointer"
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("favorites")}
              className="bg-slate-100 px-5 py-2 rounded-lg cursor-pointer"
            >
              Favorite
            </button>
            <button
              onClick={() => setActiveTab("blocked")}
              className="bg-slate-100 px-5 py-2 rounded-lg cursor-pointer"
            >
              Blocked
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Options;
