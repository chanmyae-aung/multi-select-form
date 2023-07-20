import React, { useState } from "react";
import AddOnCard from "../components/AddOnCard";
import Title from "../components/Title";
import FooterButton from "../components/FooterButton";
import { useCreateAddOnsMutation } from "../api/planApi";
import { useDispatch } from "react-redux";
import { addAddOns } from "../feature/planSlice";
import { useNavigate } from "react-router-dom";

export default function AddOns() {
  const [createAddOns] = useCreateAddOnsMutation();
  const dispatch = useDispatch()
  const nav = useNavigate()

  const [select, setSelect] = useState([])
  console.log(select)
  const handleSelect = (e) => {
    console.log(typeof(e.target.id))
    setSelect((prevSelectedIds) => {
      if(prevSelectedIds.includes(e.target.id)){
        // item is already selected, so deselect it
        return prevSelectedIds.filter((id) => {
          return id !== e.target.id
        })
      }else{
        // item is not selected, so select it
        return[...prevSelectedIds, e.target.id]
      }
    })
    // setSelect({
    //   add_on_ids: (prevSelectedIds) => {
    //     if(prevSelectedIds.includes(e.target.id)){
    //       // item is already selected, so deselect it
    //       return prevSelectedIds.filter((id) => {
    //         return id !== e.target.id
    //       })
    //     }else{
    //       // item is not selected, so select it
    //       return[...prevSelectedIds, e.target.id]
    //     }
    //   }
    // })
  }

  const handleConfirm = async (e) => {
    e.preventDefault();
    const {data} = await createAddOns(select)
    console.log(data)
    dispatch(addAddOns({addOns: data}))
    data.message === "success" && nav("/summary")
    
  };

  const addOnCard = [
    {
      id: 1,
      title: "Online Service",
      desc: "Access to multiplayer games",
      price: "+$1/mo",
    },
    {
      id: 2,
      title: "Large Storage",
      desc: "Extra 1TB of cloud save",
      price: "+$2/mo",
    },
    {
      id: 3,
      title: "Customizable Profile",
      desc: "Custom theme on your profile",
      price: "+$2/mo",
    },
  ];

  return (
    <div className=" mt-10 mx-auto w-[55%] flex flex-col justify-between">
      <div>
        <Title classes={"title"} text={"Pick add-ons"} />
        <p className="text-gray-400 mb-8">
          Add-ons help enhance your gaming experiences.
        </p>
        <div className="flex flex-col gap-3">
          {addOnCard.map((i) => {
            return (
              <div key={i.id}>
                <AddOnCard
                onchange={handleSelect}
                id={i.id}
                title={i.title}
                desc={i.desc}
                price={i.price}
                // checked={}
              />
              </div>
            );
          })}
        </div>
      </div>
      {/* <FooterButton /> */}
      <button onClick={handleConfirm} className="px-8 py-3 w-fit ml-auto rounded bg-slate-800 text-white">
        Next
      </button>
    </div>
  );
}
