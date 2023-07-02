import React from "react";
import AddOnCard from "../components/AddOnCard";
import Title from "../components/Title";
import FooterButton from "../components/FooterButton";

export default function AddOns() {
  return (
    <div className=" mt-10 mx-auto w-[55%] flex flex-col justify-between">
      <div>
      <Title classes={"title"} text={"Pick add-ons"} />
      <p className="text-gray-400 mb-8">
        Add-ons help enhance your gaming experiences.
      </p>
      <div className="flex flex-col gap-3">
      <AddOnCard
        title={"Online Service"}
        desc={"Access to multiplayer games"}
        price={"+$1/mo"}
      />
      <AddOnCard
        title={"Large Storage"}
        desc={"Extra 1TB of cloud save"}
        price={"+$2/mo"}
      />
      <AddOnCard
        title={"Customizable Profile"}
        desc={"Custom theme on your profile"}
        price={"+$2/mo"}
      />
      </div>
      </div>
      <FooterButton/>
    </div>
  );
}
