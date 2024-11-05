"use client";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import ReactCurvedText from "react-curved-text";

function MisscalComponent() {
  return (
    <div className="md:hidden">
      <a
        href="tel:+1234567890"
        className="fixed bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        style={{ zIndex: 1000 }}
      >
        {/* <ReactCurvedText
          width={30}
          height={30}
          cx={54}
          cy={54}
          rx={100}
          ry={100}
          startOffset={0}
          reversed={true}
          text="Missed Call"
          textProps={{ style: { fontSize: 10 } }}
        /> */}
        
          <FaPhone size={24} className="text-white" />
        
      </a>
    </div>
  );
}

export default MisscalComponent;
