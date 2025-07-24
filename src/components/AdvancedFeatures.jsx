import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AdvancedFeatures({ formData, setFormData, handleSubmit }) {
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  // Phone validation
  const isPhoneValid = formData.phone?.match(/^[6-9]\d{9}$/);

  // Update progress
  useEffect(() => {
    const totalFields = 7; // change this based on total fields
    let filled = 0;
    Object.keys(formData).forEach((key) => {
      if (formData[key]) filled++;
    });
    setProgress(Math.round((filled / totalFields) * 100));
  }, [formData]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("user-form", JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="mt-4 flex flex-col gap-4 p-4 border rounded-md bg-white dark:bg-gray-800">
      {/* 🌗 Theme Toggle */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-semibold text-gray-700 dark:text-white">Theme:</label>
        <button
          onClick={toggleTheme}
          className="px-4 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        >
          Toggle {darkMode ? "Light" : "Dark"}
        </button>
      </div>

      {/* 📞 Phone Input */}
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone || ""}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        {!isPhoneValid && formData.phone?.length > 0 && (
          <p className="text-sm text-red-600">Enter a valid 10-digit phone number</p>
        )}
      </div>

      {/* 📅 Date Picker */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Date of Birth</label>
        <DatePicker
          selected={formData.dob ? new Date(formData.dob) : null}
          onChange={(date) => setFormData({ ...formData, dob: date.toISOString() })}
          dateFormat="yyyy-MM-dd"
          className="p-2 border rounded dark:bg-gray-700 dark:text-white"
          showYearDropdown
          scrollableYearDropdown
          maxDate={new Date()}
        />
      </div>

      {/* 📊 Progress Bar */}
      <div className="mt-3">
        <label className="text-sm font-medium text-gray-700 dark:text-white">Form Completion</label>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden dark:bg-gray-600">
          <div
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-700 mt-1 dark:text-white">{progress}% completed</p>
      </div>

      {/* 🧾 Live Preview */}
      <div className="mt-3">
        <h3 className="text-md font-semibold text-gray-700 dark:text-white mb-1">Live Preview:</h3>
        <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-xs overflow-x-auto text-gray-800 dark:text-white">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>

      {/* 🚧 Submit Button */}
      <button
        disabled={!formData.name || !isPhoneValid || !formData.password}
        onClick={handleSubmit}
        className={`px-4 py-2 rounded text-white ${
          !formData.name || !isPhoneValid || !formData.password
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        Submit Form
      </button>
    </div>
  );
}
