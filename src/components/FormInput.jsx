import React from "react";

export default function FormInput({
  label,
  name,
  value,
  onChange,
  type = "text",
  isTextarea = false,
  maxLength,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="p-2 border rounded-md resize-none focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
          rows={3}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
        />
      )}
    </div>
  );
}
