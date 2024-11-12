"use client";
import React from "react";

function MisscalComponent() {
  return (
    <div className="md:hidden">
      <a
        href="tel:+1234567890"
        className="fixed bottom-4 right-4 w-20 h-20 p-0 bg-transparent rounded-full shadow-lg overflow-hidden flex items-center justify-center"
        style={{ zIndex: 1000 }}
      >
        <img src="/image.png" alt="Missed Call" className="m-0 w-full h-full object-cover " />
      </a>
    </div>
  );
}

export default MisscalComponent;
