import React, { useState } from "react";
import * as parts from "../assets/alpaca";
import Button from "./Button.jsx";
import nose from "../assets/alpaca/nose.png";
const Alpaca = () => {
  const [tab, setTab] = useState();
  const [backgroundShow, setBackgroundShow] = useState(
    parts.backgrounds[0].source
  );
  const [accessorieShow, setAccessorieShow] = useState(
    parts.accessories[1].source
  );
  const [earShow, setEarShow] = useState(parts.ears[1].source);
  const [legShow, setLegShow] = useState(parts.legs[1].source);
  const [neckShow, setNeckShow] = useState(parts.necks[1].source);
  const [mouthShow, setMouthShow] = useState(parts.mouths[1].source);
  const [hairShow, setHairShow] = useState(parts.hairs[1].source);
  const [eyeShow, setEyeShow] = useState(parts.eyes[1].source);
  const handleTab = () => {};
  console.log();

  return (
    <div className="flex items-center justify-center gap-10 h-fit max-lg:flex-col">
      <div className="relative flex w-fit h-fit">
        <img src={backgroundShow} className="-z-10 " alt="background" />
        <img src={eyeShow} className="absolute z-20" alt="ears" />
        <img src={accessorieShow} className="absolute z-10" alt="" />
        <img src={earShow} className="absolute z-1" alt="" />
        <img src={legShow} className="absolute z-10" alt="" />
        <img src={neckShow} className="absolute z-1" alt="" />
        <img src={mouthShow} className="absolute z-20" alt="" />
        <img src={hairShow} className="absolute z-2" alt="" />
        <img src={nose} className="absolute z-10" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center w-3/4 gap-10 lg:w-1/2">
        <div className="flex flex-wrap justify-center gap-2 h-fit w-fit ">
          {Object.keys(parts).map((item) => (
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
          {tab === "backgrounds"
            ? parts.backgrounds.map((item) => (
                <div key={item.title}>
                  <Button
                    click={() => {
                      setBackgroundShow(item.source);
                    }}
                    text={item.title}
                  />
                </div>
              ))
            : tab === "accessories"
            ? parts.accessories.map((item) => (
                <div key={item.title}>
                  <Button
                    click={() => {
                      setAccessorieShow(item.source);
                    }}
                    text={item.title}
                  />
                </div>
              ))
            : tab === "ears"
            ? parts.ears.map((item) => (
                <div key={item.title}>
                  <Button
                    click={() => {
                      setEarShow(item.source);
                    }}
                    text={item.title}
                  />
                </div>
              ))
            : tab === "eyes"
            ? parts.eyes.map((item) => (
                <div key={item.title}>
                  <Button
                    click={() => {
                      setEyeShow(item.source);
                    }}
                    text={item.title}
                  />
                </div>
              ))
            : tab === "hairs"
            ? parts.hairs.map((item) => (
                <div key={item.title}>
                  <Button
                    click={() => {
                      setHairShow(item.source);
                    }}
                    text={item.title}
                  />
                </div>
              ))
            : tab === "legs"
            ? parts.legs.map((item) => (
                <div key={item.title}>
                  <Button
                    click={() => {
                      setLegShow(item.source);
                    }}
                    text={item.title}
                  />
                </div>
              ))
            : tab === "mouths"
            ? parts.mouths.map((item) => (
                <div key={item.title}>
                  <Button
                    click={() => {
                      setMouthShow(item.source);
                    }}
                    text={item.title}
                  />
                </div>
              ))
            : parts.necks.map((item) => (
                <div key={item.title}>
                  <Button
                    click={() => {
                      setNeckShow(item.source);
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
