import React, { useState } from "react";
import Card from "../components/Card";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import Title from "../components/Title";
import { Switch } from "@mantine/core";
import Button from "../components/Button";
import FooterButton from "../components/FooterButton";
import { useCreatePlanMutation } from "../api/planApi";
import { useDispatch } from "react-redux";
import { addPlan } from "../feature/planSlice";

export default function SelectPlan() {
  const [choosePlan] = useCreatePlanMutation();
  const dispatch = useDispatch()

  const [state, setState] = useState(null);
  console.log(state);

  const handleSelect = (e) => {
    const planTitle = e.target.lastChild.children[0].innerText;
    const planPrice = e.target.lastChild.children[1].innerText;
    setState({
      title: planTitle,
      price: planPrice,
    });
  };

  const ConfirmPlan = async (e) => {
    e.preventDefault();
    const {data} = await choosePlan(state);
    console.log(data);
    dispatch(addPlan({plan: data}))
  };
  return (
    <div className=" mt-10 mx-auto w-[55%] flex flex-col justify-between">
      <div>
        <Title classes={"title"} text={"Select your plan"} />
        <p className="text-gray-400">
          You have the option of monthly or yearly billing.
        </p>
        <div onClick={handleSelect} className="flex mt-10 mb-5 gap-5">
          <Card text={"Arcade"} icon={arcade} price={"$9/mo"} />
          <Card text={"Advanced"} icon={advanced} price={"$12/mo"} />
          <Card text={"Pro"} icon={pro} price={"$15/mo"} />
        </div>
        <div className="p-2.5 rounded bg-blue-100 flex items-center gap-5 justify-center">
          <span>Monthly</span>
          <Switch size="sm" color="gray" />
          <span>Yearly</span>
        </div>
      </div>
      <button onClick={ConfirmPlan} className="px-8 py-3 rounded bg-slate-800 text-white">
        Next
      </button>
    </div>
  );
}
