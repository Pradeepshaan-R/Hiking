import React, { useState } from "react";
import { SliderData } from "../Data/SliderData";
import Header from "./Header";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Index = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Header slides={SliderData} />
    </>
  );
};

export default Index;
