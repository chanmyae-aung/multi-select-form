import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import FooterButton from "../components/FooterButton";

export default function YourInfo() {
  return (
    <div className=" mt-10 lg:mx-auto w-full rounded-lg relative lg:static -top-24 bg-white lg:rounded-none lg:w-[55%] flex flex-col justify-between">
      <div>
        <Title classes={"title"} text={"Personal Info"} />
        <p className="text-gray-400">
          Please provide your name, email address and phone number
        </p>
        <form className="mt-10">
          <div>
            <span className="block text-sm font-medium text-slate-700">Name</span>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 rounded-md border-2 border-gray-200 outline-none"
              placeholder="e.g. Stephen King"
            />
          </div>
          <div className="my-5">
            <span className="block text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 rounded-md border-2 border-gray-200 outline-none"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div>
            <span className="block text-sm font-medium text-slate-700">
              Phone Number
            </span>
            <input
              type="phone"
              className="mt-1 block w-full px-3 py-2 rounded-md border-2 border-gray-200 outline-none"
              placeholder="e.g. +959 123 456 789"
            />
          </div>
        </form>
      </div>
        <FooterButton/>
    </div>
  );
}
