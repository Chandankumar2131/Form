import React, { useState } from "react";
import UserForm from "./components/UserForm";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen p-6`}>
      <div className="max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Enhanced React Form</h1>
          <button onClick={toggleTheme} className="bg-indigo-500 text-white px-3 py-1 rounded">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <UserForm />
      </div>
    </div>
  );
}
