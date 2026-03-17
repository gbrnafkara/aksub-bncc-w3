// import React, { useState } from "react";

// function Dropdown({ title, children }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         borderRadius: "6px",
//         marginBottom: "10px",
//       }}
//     >
//       <div
//         onClick={() => setOpen(!open)}
//         style={{
//           padding: "10px",
//           cursor: "pointer",
//           background: "#f5f5f5",
//         }}
//       >
//         {title}
//       </div>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateRows: open ? "1fr" : "0fr",
//           transition: "grid-template-rows 0.3s ease",
//         }}
//       >
//         <div
//           style={{
//             overflow: "hidden",
//             padding: open ? "10px" : "0 10px",
//           }}
//         >
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dropdown;

const Input = ({
  label,
  type,
  idName,
  placeholder,
  sizeInput,
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={idName} className="font-medium">
        {label}
      </label>
      <input
        type={type}
        id={idName}
        className="border border-[#EBEBEB] outline-none py-4.5 px-6 rounded-lg"
        name={idName}
        placeholder={placeholder}
        value={value}
        style={{ width: sizeInput }}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
