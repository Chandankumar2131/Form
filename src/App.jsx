import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textArea: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });

  const handleForm = (event) => {
    event.preventDefault();
    console.log(input);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    
   
  };
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleForm}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">User Form</h2>

        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          onChange={handleChange}
          value={input.firstName}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          onChange={handleChange}
          value={input.lastName}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={input.email}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />

        <textarea
          name="textArea"
          placeholder="Enter your comment"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring focus:ring-blue-200"
        />

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            onChange={handleChange}
            name="isVisible"
            id="isVisible"
            checked={input.isVisible}
            className="h-4 w-4"
          />
          <label htmlFor="isVisible" className="text-gray-700">
            Am I visible?
          </label>
        </div>

        <fieldset className="border border-gray-300 rounded p-3">
          <legend className="text-sm font-medium text-gray-700 mb-2">
            Mode:
          </legend>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="mode"
                value="online-mode"
                id="mode"
                checked={input.mode === "online-mode"}
                onChange={handleChange}
              />
              <label htmlFor="mode">Online</label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="mode"
                value="ofline-mode"
                id="mode2"
                checked={input.mode === "ofline-mode"}
                onChange={handleChange}
              />
              <label htmlFor="mode2">Offline</label>
            </div>
          </div>
        </fieldset>

        <div className="space-y-1">
          <label htmlFor="favCar" className="block text-gray-700">
            Choose your Fav Car:
          </label>
          <select
            name="favCar"
            id="favCar"
            onChange={handleChange}
            value={input.favCar}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select one</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Fortuner">Fortuner</option>
            <option value="Defender">Defender</option>
            <option value="Legender">Legender</option>
            <option value="Thar">Thar</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
         
        >
          Submit
        </button>
      </form>
    </div>
  );
}
