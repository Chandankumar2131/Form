import React, { useState } from "react";

export default function ProfileUpload({ label, name, value, onChange }) {
  const [preview, setPreview] = useState(value || null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);         // Preview
      onChange({ target: { name, value: reader.result } }); // Send to parent
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="p-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
      />

      {preview && (
        <img
          src={preview}
          alt="Profile Preview"
          className="w-24 h-24 object-cover rounded-full border mt-2"
        />
      )}
    </div>
  );
}
