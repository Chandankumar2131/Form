import React, { useState } from "react";

export default function HomeWork() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidate: false,
    offers: false,
    mode: "",
  });
  const hanleInput = (event) => {
    const { name, value, type, checked } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xl space-y-6"
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-800">User Information</h2>

        {/* ── Basic details ─────────────────────────────────────────── */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Chandan"
            onChange={hanleInput}
            value={input.firstName}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Yadav"
            onChange={hanleInput}
            value={input.lastName}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="chandan@gmail.com"
            onChange={hanleInput}
            value={input.email}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            onChange={hanleInput}
            value={input.country}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option>India</option>
            <option>America</option>
            <option>Russia</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Street Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={hanleInput}
            value={input.address}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={hanleInput}
            value={input.city}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            onChange={hanleInput}
            value={input.state}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="zip"
            className="block text-sm font-medium text-gray-700"
          >
            ZIP Code
          </label>
          <input
            type="number"
            id="zip"
            name="zip"
            onChange={hanleInput}
            value={input.zip}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* ── Email notifications ───────────────────────────────────── */}
        <div>
          <p className="text-sm font-medium text-gray-700">
            Email Notifications
          </p>
          <div className="mt-2 space-y-2">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                id="comments"
                name="comments"
                className="mt-1"
                checked={input.comments}
                onChange={hanleInput}
              />
              <span>
                Get notified when someone posts a comment on a posting
              </span>
            </label>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                id="candidate"
                name="candidate"
                className="mt-1"
                checked={input.candidate}
                onChange={hanleInput}
              />
              <span>Get notified when a candidate applies for a job</span>
            </label>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                id="offers"
                name="offers"
                className="mt-1"
                onChange={hanleInput}
                checked={input.offers}
              />
              <span>
                Get notified when a candidate accepts or rejects an offer
              </span>
            </label>
          </div>
        </div>

        {/* ── Push notifications ────────────────────────────────────── */}
        <div>
          <p className="text-sm font-medium text-gray-700">
            Push Notifications
          </p>
          <p className="text-xs text-gray-500 mb-2">
            These are delivered via SMS to your mobile phone.
          </p>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              id="radio1"
              name="mode"
              value="Everything"
              onChange={hanleInput}
              checked={input.mode == "Everything"}
            />
            <span>Everything</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              id="radio2"
              name="mode"
              value="same-as-Email"
              onChange={hanleInput}
              checked={input.mode == "same-as-Email"}
            />
            <span>Same as Email</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              id="radio3"
              name="mode"
              value="nothing"
              onChange={hanleInput}
              checked={input.mode == "nothing"}
            />
            <span>No push notifications</span>
          </label>
        </div>

        {/* ── Save button (small + centered) ────────────────────────── */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded-md transition duration-200"
          >
            Save      
          </button>
        </div>
      </form>
    </div>
  );
}
