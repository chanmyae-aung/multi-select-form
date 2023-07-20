import React, { useEffect } from "react";
import ConfirmCard from "../components/ConfirmCard";
import Title from "../components/Title";
import FooterButton from "../components/FooterButton";
import { useGetFinishQuery } from "../api/planApi";

export default function Summary() {
  const {data} = useGetFinishQuery()
  console.log(data)

  const price = data?.data.plan.price;
  console.log(price)
  // useEffect(() => {
  //   fetchData()
  // },[])
  // const fetchData = async () => {
  //   const res = await fetch("http://159.89.194.156/api/finish")
  //   const data = await res.json()
  //   console.log(data)
  // }

  return (
    <div className=" mt-10 mx-auto w-[55%] flex flex-col justify-between">
      <div>
        <div>
          <Title classes={"title"} text={"Finishing up"} />
          <p className="text-gray-400 mb-10">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <ConfirmCard price={price} text={"Arcade(Monthly)"} />
      </div>
      <FooterButton />
    </div>
  );
}
