import React from "react";
import Title from "./Title";

export default function AddOnCard({title, desc, price}) {
  return (
    <div className="px-5 py-2.5 flex justify-between items-center border border-purple-700 rounded-lg">
      <div className="flex gap-5 items-center">
        <input type="checkbox" name="" id="" />
        <div>
          <Title text={title} classes={"font-semibold"}/>
          <p className="text-slate-400">{desc}</p>
        </div>
      </div>
      <p className="text-purple-600">{price}</p>
    </div>
  );
}
