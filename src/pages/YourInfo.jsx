import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import FooterButton from "../components/FooterButton";
import { useCreateUserMutation } from "../api/userApi";
import { useDispatch } from "react-redux";
import { createUser } from "../feature/userSlice";
import { useNavigate } from "react-router-dom";

export default function YourInfo() {
  const [create] = useCreateUserMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const createHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { name, email, phone };
      const { data } = await create(user);
      data.message === 'success' && nav("/plan")
      console.log(data.message);
      dispatch(createUser({ user: data.user }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" mt-10 lg:mx-auto w-full p-3 lg:p-0 rounded-lg relative lg:static -top-24 bg-white lg:rounded-none lg:w-[55%] flex flex-col justify-between">
      <div>
        <Title classes={"title"} text={"Personal Info"} />
        <p className="text-gray-400">
          Please provide your name, email address and phone number
        </p>
        <form onSubmit={createHandler} className="mt-10">
          <div>
            <span className="block text-sm font-medium text-slate-700">
              Name
            </span>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="mt-1 block w-full px-3 py-2 rounded-md border-2 border-gray-200 outline-none"
              placeholder="e.g. Stephen King"
              required
            />
          </div>
          <div className="my-5">
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mt-1 block w-full px-3 py-2 rounded-md border-2 border-gray-200 outline-none"
              placeholder="e.g. stephenking@lorem.com"
              required
            />
          </div>
          <div>
            <span className="block text-sm font-medium text-slate-700">
              Phone Number
            </span>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              className="mt-1 block w-full px-3 py-2 rounded-md border-2 border-gray-200 outline-none"
              placeholder="e.g. +959 123 456 789"
              required
            />
          </div>
          <button
            className="px-8 py-3 rounded bg-slate-800 text-white"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
