import React, { useState } from "react";

const DropdownContent = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-amber-300 rounded-lg">
      <div onClick={() => setOpen(!open)} className="p-2.5">
        {title}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows .3s ease-in-out",
        }}
      >
        <div style={{ overflow: "hidden", padding: open ? "10px" : "0 10px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DropdownContent;
