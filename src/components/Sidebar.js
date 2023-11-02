import React, { useState } from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { BiBookAlt } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Sidebar({ children, setOpen, open }) {
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen((open) => !open);
  };
  return (
    <>
      <button onClick={handleOpen} className="fixed m-2 landscape:hidden">
        <GiHamburgerMenu />
      </button>
      <div
        className={`${
          open ? "portrait:fixed" : "portrait:hidden"
        } landscape:w-1/4 h-screen  py-3 min-h-screen max-h-100 flex flex-col bg-blue-600 px-5 justify-between`}
      >
        <div className="">
          <button className="landscape:hidden text-white" onClick={handleOpen}>
            <IoMdClose />
          </button>
          <div className="flex justify-start items-center my-5">
            <img
              src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/i6hevcbuhrj95l7mferx"
              alt=""
              className="w-8 border-1 rounded-xl"
            />
            <h1 className="text-lg font-bold text-white mx-3">ZORP</h1>
          </div>
          {children}
        </div>
        <div className="mb-5 text-white text-sm">
          <div className="flex items-center px-3 py-2 hover:bg-blue-900 cursor-pointer rounded-md">
            <HiOutlineChatBubbleLeftRight className="mr-3" />
            <p>Chat with Us</p>
          </div>
          <div className="flex items-center px-3 py-2 hover:bg-blue-900 cursor-pointer rounded-md">
            <BiBookAlt className="mr-3" />
            <p>Knowledge Base</p>
          </div>
          <div className="flex items-center px-3 py-2 hover:bg-blue-900 cursor-pointer rounded-md">
            <CiSettings className="mr-3" />
            <p className="flex items-center">
              <p>Settings</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
