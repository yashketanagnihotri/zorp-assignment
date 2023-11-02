import React, { useState } from "react";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineLightningBolt } from "react-icons/hi";

function ProductCard({ heading, content, category }) {
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected((selected) => !selected);
  };
  return (
    <div
      className={`text-sm p-5 border-2 rounded-md  ms-0 duration-300 shadow-md ${
        selected ? "bg-blue-200" : ""
      }`}
    >
      <div className="flex items-center my-1">
        <VscGraph />
        <p className="mx-2 font-bold">{heading}</p>
      </div>
      <p className="text-gray-600">{content}</p>
      <div className="my-2 flex items-center justify-between">
        <p className="p-1 bg-slate-100 rounded-md font-semibold text-slate-700 text-xs">
          {category}
        </p>
        <div className="text-blue-600 flex items-center">
          <HiOutlineLightningBolt size="20px" className="mx-1" />
          <span className="inline-block mx-1">Send Test Alert</span>
          <input
            type="checkbox"
            className="mx-1 w-5 h-5 border-gray-700 rounded-md"
            size="1000px"
            checked={selected}
            onClick={toggleSelected}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
