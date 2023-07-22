import React, { useEffect } from "react";
import ConfirmCard from "../components/ConfirmCard";
import Title from "../components/Title";
import FooterButton from "../components/FooterButton";

export default function Summary() {
  return (
    <div className=" mt-10 mx-auto w-[55%] flex flex-col justify-between">
      <div>
        <div>
          <Title classes={"title"} text={"Finishing up"} />
          <p className="text-gray-400 mb-10">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <ConfirmCard />
      </div>
      <FooterButton />
    </div>
  );
}
