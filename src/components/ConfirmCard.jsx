import React, { useEffect, useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import FooterButton from "./FooterButton";
import { useGetAddOnsQuery, useGetFinishQuery, useGetPlanQuery } from "../api/planApi";

export default function ConfirmCard() {

  const {data:getPlan} = useGetPlanQuery()
  console.log(getPlan)
  const {data: getAddOns} = useGetAddOnsQuery()
  console.log(getAddOns)
  // console.log(data)
  const planTitle = getPlan?.data.title;
  const planPrice = getPlan?.data.price;
  const planType = getPlan?.data.type;
  
  console.log(getAddOns?.data)
  const addOns = getAddOns?.data

const addOnPrices = []
  const addOnCard = [
    {
      id: 1,
      title: "Online Service",
      desc: "Access to multiplayer games",
      price: 1,
    },
    {
      id: 2,
      title: "Large Storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      title: "Customizable Profile",
      desc: "Custom theme on your profile",
      price: 2,
    },
  ];
  // console.log(addOns)
  return (
    <div>
      <div className="p-5 rounded-lg bg-blue-50">
        <div className="flex justify-between">
          <div>
            <Title text={planTitle} />
            <Link to={"/"} className="text-blue-500 underline text-sm">
              Change
            </Link>
          </div>
          <p>${`${planPrice} /${planType}`}</p>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col gap-3">
          {addOns&&addOns.map((i) => {
            console.log(i.type)
            const id = i.add_on_id;
            const data = addOnCard.find(el=> el.id == id);
            console.log(data.price)
            addOnPrices.push(data.price)
            return <div key={i.id} className="flex justify-between">
              <p>{data.title}</p>
              <p>{`$ ${data.price} ${i.type === "month" ? "/mon" : "/year"}`}</p>
            </div>
          })}
        </div>
      </div>
      <div className="flex justify-between items-center my-4 mx-5">
        <p>{`Total (per ${planType})`}</p>
        <p className="text-purple-600 font-bold text-lg">{`$ ${parseInt(planPrice) + addOnPrices.reduce((x,y) => x+y, 0)}`}</p>
      </div>
    </div>
  );
}
