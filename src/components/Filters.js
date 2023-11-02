import React from "react";

function Filters({ children }) {
  return (
    <div className="flex portrait:flex-col my-5 text-sm items-center justify-between">
      {children}
    </div>
  );
}

export default Filters;
