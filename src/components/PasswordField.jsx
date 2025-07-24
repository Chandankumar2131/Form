import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordField({ label, name, value, onChange }) {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((prev) => !prev);

  return (
    <div className="flex flex-col gap-1 relative">
      <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        className="p-2 pr-10 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
      />

      <span
        onClick={toggleShow}
        className="absolute right-3 top-[38px] cursor-pointer text-gray-600 dark:text-gray-300"
      >
        {show ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
}
