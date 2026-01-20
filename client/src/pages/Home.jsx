import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/bg_img.png')] bg-cover bg-center relative">
      <Navbar />
      <div className="absolute inset-0 flex justify-center items-center">
        <Header />
      </div>
    </div>
  );
};

export default Home;
