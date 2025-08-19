import Footer from "../Footer";
import Header from "../Header";
import React from "react";
import Facilities from "./Facilities/Index";
import WebDevelopmentServices from "./Webdev";
import CreativeServices from "./CreativeService";
const Services = () => {
  return (
    <div>
      <Header />
      <Facilities/>
      <WebDevelopmentServices/>
      <CreativeServices/>
      <Footer/>
    </div>
  );
};

export default Services;
