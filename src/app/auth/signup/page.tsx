"use client";

import { axios } from "@/lib/axios";
import { useRef } from "react";

export default function Page() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const { data } = await axios.post("/auth/register", {
      firstName,
      lastName,
      email,
      password,
    });

    console.log(data);
  };

  return (
    <form
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label htmlFor="firstName" className="block font-medium mb-1">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          ref={firstNameRef}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block font-medium mb-1">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          ref={lastNameRef}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          ref={emailRef}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          ref={passwordRef}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
