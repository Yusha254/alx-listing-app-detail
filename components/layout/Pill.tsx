import React from "react";
import { PillProps } from "@/interfaces";


const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition 
        ${active 
          ? "bg-black text-white"   // active style
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`
      }
    >
      {label}
    </button>
  );
};

export default Pill;
