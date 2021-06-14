import React, { useState } from "react";
import { SliderData } from "../Data/SliderData";
import CardSection from "./CardSection";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
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
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <CardSection />
      <SectionFour />
      <Footer />
    </>
  );
};

export default Index;
