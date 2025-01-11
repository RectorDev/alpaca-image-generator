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
  const [backgroundShow, setBackgroundShow] = useState(backgrounds[0].source);
  const handleTab = () => {};
  return (
    <div className="flex items-center justify-center gap-10 h-fit max-lg:flex-col">
      <div className="relative flex w-fit h-fit">
        <img src={backgroundShow} className="-z-10 " alt="background" />
        <img src={eyes[0].source} className="absolute z-10" alt="ears" />
        <img src={null} className="absolute z-10" alt="" />
        <img src={ears[0].source} className="absolute z-1" alt="" />
        <img src={legs[0].source} className="absolute z-10" alt="" />
        <img src={necks[0].source} className="absolute z-1" alt="" />
        <img src={mouths[0].source} className="absolute z-10" alt="" />
        <img src={hairs[0].source} className="absolute z-10" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-wrap justify-center gap-2 h-fit w-fit ">
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
        <div className="flex flex-wrap items-center justify-center gap-2 h-fit w-fit">
          {backgrounds.map((item) => (
            <div key={item.title}>
              <Button
                click={() => {
                  setBackgroundShow(item.source);
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
