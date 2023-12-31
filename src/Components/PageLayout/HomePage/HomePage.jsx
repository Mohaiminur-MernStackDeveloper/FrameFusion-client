import React from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import SliderLayout from "./Layout/SliderLayout";
import { Container } from "postcss";
import PopularClass from "./Layout/PopularClass";
import PopularInstructors from "./Layout/PopularInstructors";
import DaynamicTitle from "../../reusedComponents/DaynamicTitle";
import Contactus from "./Layout/Contactus";
import Getintouch from "./Layout/Getintouch";
import BannerSection from "./Layout/BannerSection";
import SubBanner from "./Layout/SubBanner";
import SubSlider from "./Layout/SubSlider";

const HomePage = () => {
  return (
    <div>
      <DaynamicTitle>Home</DaynamicTitle>
      {/* Slider section from here */}
      <ContainerLayout>
        <SliderLayout />
      </ContainerLayout>
      {/* Bannersection from here */}
      <ContainerLayout>
        <BannerSection/>
      </ContainerLayout>
      {/* Popular class section from here */}
      <ContainerLayout>
        <PopularClass />
      </ContainerLayout>
      {/* subbanner section from here */}
      <SubBanner/>
      {/* Popular Instructors section from here */}
      <ContainerLayout>
        <PopularInstructors/>
      </ContainerLayout>
      {/* subslider from here */}
      <SubSlider/>
      {/* contact us section from here */}
      <ContainerLayout>
        <Contactus/>
      </ContainerLayout>
      {/* get in touch section from here */}
      <ContainerLayout>
        <Getintouch/>
      </ContainerLayout>
    </div>
  );
};

export default HomePage;
