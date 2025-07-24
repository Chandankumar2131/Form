import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import PasswordField from "./PasswordField";
import ProfileUpload from "./ProfileUpload";
import RadioGroup from "./RadioGroup";
import SelectCar from "./SelectCar";
import ProgressBar from "./ProgressBar";
import LivePreview from "./LivePreview";

export default function UserForm() {
  const [input, setInput] = useState(() => {
    const saved = localStorage.getItem("userForm");
    return saved
      ? JSON.parse(saved)
      : {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
          textArea: "",
          isVisible: true,
          mode: "",
          favCar: "",
          dob: "",
          profilePic: null,
        };
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [charCount, setCharCount] = useState(input.textArea.length || 0);
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "textArea") setCharCount(value.length);

    if (name === "profilePic") {
      const file = files[0];
      if (file) {
        setInput((prev) => ({ ...prev, profilePic: file }));
        setPreviewImg(URL.createObjectURL(file));
      }
      return;
    }

    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleReset = () => {
    const resetState = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      textArea: "",
      isVisible: true,
      mode: "",
      favCar: "",
      dob: "",
      profilePic: null,
    };
    setInput(resetState);
    setSubmittedData(null);
    setCharCount(0);
    setError("");
    setPreviewImg(null);
    localStorage.removeItem("userForm");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !input.firstName ||
      !input.lastName ||
      !input.email ||
      !input.password ||
      !input.phone ||
      !input.dob
    ) {
      setError("Please fill all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(input.phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    setError("");
    setSubmittedData(input);
    console.log("Submitted: ", input);
  };

  useEffect(() => {
    localStorage.setItem("userForm", JSON.stringify(input));
  }, [input]);

  useEffect(() => {
    const total = 9;
    let filled = 0;
    if (input.firstName) filled++;
    if (input.lastName) filled++;
    if (input.email) filled++;
    if (input.password) filled++;
    if (input.phone && /^\d{10}$/.test(input.phone)) filled++;
    if (input.textArea) filled++;
    if (input.mode) filled++;
    if (input.favCar) filled++;
    if (input.dob) filled++;

    const percentage = Math.floor((filled / total) * 100);
    setProgress(percentage);
    setIsFormValid(filled === total);
  }, [input]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <FormInput name="firstName" label="First Name" value={input.firstName} onChange={handleChange} />
      <FormInput name="lastName" label="Last Name" value={input.lastName} onChange={handleChange} />
      <FormInput name="email" label="Email" value={input.email} onChange={handleChange} type="email" />
      <PasswordField value={input.password} onChange={handleChange} />
      <FormInput name="phone" label="Phone Number" value={input.phone} onChange={handleChange} maxLength={10} />
      <FormInput name="dob" label="Date of Birth" value={input.dob} onChange={handleChange} type="date" />
      <FormInput
        name="textArea"
        label={`Your Comment (${charCount} characters)`}
        value={input.textArea}
        onChange={handleChange}
        isTextarea
      />

      <ProfileUpload onChange={handleChange} previewImg={previewImg} />
      <div className="flex items-center gap-2">
        <input type="checkbox" name="isVisible" checked={input.isVisible} onChange={handleChange} />
        <label>Am I visible?</label>
      </div>

      <RadioGroup mode={input.mode} onChange={handleChange} />
      <SelectCar value={input.favCar} onChange={handleChange} />
      <ProgressBar progress={progress} />

      <div className="flex gap-3">
        <button
          type="submit"
          className={`w-full py-2 rounded ${isFormValid ? "bg-blue-600 text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}
          disabled={!isFormValid}
        >
          Submit
        </button>
        <button type="button" onClick={handleReset} className="w-full bg-red-500 text-white py-2 rounded">
          Reset
        </button>
      </div>

      {submittedData && <LivePreview data={submittedData} />}
    </form>
  );
}
