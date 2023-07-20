import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import FooterButton from "./FooterButton";

export default function ConfirmCard({ text, price }) {
  return (
    <div>
      <div className="p-5 rounded-lg bg-blue-50">
        <div className="flex justify-between">
          <div>
            <Title text={text} />
            <Link to={"/plan"} className="text-blue-500 underline text-sm">
              Change
            </Link>
          </div>
          <p>{price}</p>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center text-slate-400 text-sm">
            <p>Online service</p>
            <p>+$1/month</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-4 mx-5">
        <p>Total(per month)</p>
        <p className="text-purple-600 font-bold text-lg">+$12/mo</p>
      </div>
    </div>
  );
}
