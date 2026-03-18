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
      {label && (
        <label htmlFor={idName} className="font-medium">
          {label}
        </label>
      )}

      <input
        type={type}
        id={idName}
        className="border border-[#EBEBEB] outline-none py-4.5 px-6 rounded-lg"
        name={idName}
        placeholder={placeholder ? placeholder : null}
        value={value}
        style={{ width: sizeInput }}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
