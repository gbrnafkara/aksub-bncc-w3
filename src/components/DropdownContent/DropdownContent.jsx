import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

export const Dropdown = ({ title, totalData, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="rounded-lg w-full">
      <div
        onClick={handleOpen}
        className="flex gap-3 items-center cursor-pointer p-2.5"
      >
        <FaAngleDown
          style={{
            rotate: isOpen ? "0deg" : "-90deg",
            transition: "rotate .3s ease-in-out",
          }}
          className="w-4 h-7"
        />
        <FaRegCalendarAlt />
        <h2>{title}</h2>
        <span className="max-h-max py-0.5 rounded-sm px-2 bg-[#F6F6F6]">
          {totalData}
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows .3s ease-in-out",
        }}
      >
        <div
          style={{ overflow: "hidden", padding: isOpen ? "10px" : "0 10px" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
