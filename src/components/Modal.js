import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

function Modal({ closeModal, children }) {
  return (
    <div className="bg-blue-600  flex text-white p-3 rounded-md justify-between items-center text-sm">
      {children}
      <div className="flex justify-end">
        <button className="text-gray-600 bg-white px-2 py-1 rounded-sm mx-3 border-solid font-semibold text-gray-700">
          Book a session
        </button>
        <button onClick={closeModal} className="">
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}

export default Modal;
