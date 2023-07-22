import React, { useState } from "react";
import Card from "../components/Card";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import Title from "../components/Title";
import { Switch } from "@mantine/core";
// import Button from "../components/Button";
// import FooterButton from "../components/FooterButton";
import { useCreatePlanMutation } from "../api/planApi";
import { useDispatch } from "react-redux";
import { addPlan } from "../feature/planSlice";
import { useNavigate } from "react-router-dom";

export default function SelectPlan() {
  const [switchPlan, setSwitchPlan] = useState(false);
  const [state, setState] = useState(null);
  console.log(state);

  const plan = [
    {
      id: 1,
      title: "Arcade",
      icon: arcade,
      month_price: 9,
      year_price: 90,
      priceString: "$ 9/mon",
      priceYear: "$ 90/yr",
      promotion: "2 month free",
    },
    {
      id: 2,
      title: "Advanced",
      icon: advanced,
      month_price: 12,
      year_price: 120,
      priceString: "$ 12/mon",
      priceYear: " $ 120/yr",
      promotion: "2 month free",
    },
    {
      id: 3,
      title: "Pro",
      icon: pro,
      month_price: 15,
      year_price: 150,
      priceString: "$ 15/mon",
      priceYear: "$ 150 /yr",
      promotion: "2 month free",
    },
  ];
  // const yearlyPlan = [
  //   {
  //     id: 1,
  //     title: "Arcade",
  //     icon: arcade,
  //     price: 90,
  //     priceString: "$90/yr",
  //     promotion: "2month free"
  //   },
  //   {
  //     id: 2,
  //     title: "Advanced",
  //     icon: advanced,
  //     price: 120,
  //     priceString: "$120/yr",
  //     promotion: "2month free"
  //   },
  //   {
  //     id: 3,
  //     title: "Pro",
  //     icon: pro,
  //     price: 150,
  //     priceString: "$150/yr",
  //     promotion: "2month free"
  //   },
  // ];

  const [choosePlan] = useCreatePlanMutation();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const card = document.querySelectorAll(".card");
  const handleSelect = (e) => {
    const value = plan.filter((i) => {
      const planTitle = e.target.lastChild.childNodes[0].innerHTML;
      // console.log(i.title)
      return planTitle === i.title;
    });
    console.log(value[0]);
    // console.log(e.target)
    // const planPrice = e.target.lastChild.childNodes[1].innerHTML;
    // console.log(i)
    setState({
      title: value[0].title,
      price: `${switchPlan ? value[0].year_price : value[0].month_price}`,
      type: `${switchPlan ? "year" : "month"}`,
      promotion: `${switchPlan ? "2 month free" : null}`,
    });

    // for border color when selected card
    card.forEach((item) => {
      item.classList.remove("selected");
      e.target.classList.add("selected");
    });
  };

  const handleSwitch = () => {
    setSwitchPlan(!switchPlan);
    card.forEach((item) => {
      item.classList.remove("selected");
    });
    setState("")
  };
  const ConfirmPlan = async (e) => {
    e.preventDefault();
    const { data } = await choosePlan(state);
    console.log(data);
    dispatch(addPlan({ plan: data }));
    data.message === "success" && nav("/add-ons");
  };

  return (
    <div className=" mt-10 mx-auto w-[55%] flex flex-col justify-between">
      <div>
        <Title classes={"title"} text={"Select your plan"} />
        <p className="text-gray-400">
          You have the option of monthly or yearly billing.
        </p>
        {switchPlan === false ? (
          <div onClick={handleSelect} className="flex flex-col lg:flex-row lg:mt-10 my-5 gap-5">
            {plan.map((i) => {
              // console.log(i)
              return (
                <Card
                  priceString={i.priceString}
                  key={i.id}
                  text={i.title}
                  icon={i.icon}
                  price={i.month_price}
                />
              );
            })}
          </div>
        ) : (
          <div onClick={handleSelect} className="flex flex-col lg:flex-row lg:mt-10 my-5 gap-5">
            {plan.map((i) => {
              return (
                <Card
                  promotion={i.promotion}
                  priceString={i.priceYear}
                  key={i.id}
                  text={i.title}
                  icon={i.icon}
                  price={i.year_price}
                />
              );
            })}
          </div>
        )}
        <div className="p-2.5 rounded bg-blue-100 flex items-center gap-5 justify-center">
          <span>Monthly</span>
          <Switch size="sm" color="gray" onClick={handleSwitch} />
          <span>Yearly</span>
        </div>
      </div>
      <button
        onClick={ConfirmPlan}
        className="px-8 py-3 w-fit ml-auto rounded bg-slate-800 text-white"
      >
        Next
      </button>
    </div>
  );
}
