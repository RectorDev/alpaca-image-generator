import React, { useState } from "react";
import {
  ears,
  backgrounds,
  legs,
  accessories,
  necks,
  eyes,
  mouths,
  hairs,
} from "../assets/alpaca";
import Button from "./button";

const Alpaca = () => {
  const tabs = [
    "background",
    "hair",
    "eye",
    "neck",
    "mouth",
    "ear",
    "leg",
    "accessories",
  ];
  const [tab, setTab] = useState();
  const handleTab = () => {};
  return (
    <div className="flex h-fit gap-10  max-lg:flex-col justify-center items-center">
      <div className="w-fit h-fit relative flex">
        <img src={backgrounds[0].source} className="-z-10 " alt="background" />
        <img src={eyes[0].source} className="z-10 absolute" alt="ears" />
        <img src={null} className="z-10 absolute" alt="" />
        <img src={ears[0].source} className="z-1 absolute" alt="" />
        <img src={legs[0].source} className="z-10 absolute" alt="" />
        <img src={necks[0].source} className="z-1 absolute" alt="" />
        <img src={mouths[0].source} className="z-10 absolute" alt="" />
        <img src={hairs[0].source} className="z-10 absolute" alt="" />
      </div>
      <div className="flex justify-center items-center gap-10 flex-col">
        <div className="flex gap-2 justify-center flex-wrap h-fit w-fit ">
          {tabs.map((item) => (
            <Button
              key={item}
              click={() => {
              setTab(item);

              }}
              text={item}
            />
          ))}
        </div>
        <div className="flex gap-2 justify-center items-center flex-wrap h-fit w-fit">
          {backgrounds.map((item) => (
            <div key={item.title}>
              <Button
                click={() => {
                  setTab(item.title);
                  console.log(tab);
                }}
                text={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alpaca;
