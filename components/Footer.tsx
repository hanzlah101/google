import Image from "next/image";
import React from "react";
import leafImg from "../public/assets/leaf.png";

const Footer = () => {
  return (
    <footer className="w-full absolute bottom-0 left-0 bg-gray-100 text-gray-500 py-3 grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense lg:grid-cols-3 gap-y-4 text-sm md:px-8">
      <div className="flex items-center justify-center md:col-span-2 lg:col-span-1 lg:col-start-2 gap-2 cursor-pointer hover:underline">
        <Image src={leafImg} className="w-4" alt="leafimage" />
        Carbon neutral since 2007
      </div>

      <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
        <p className="cursor-pointer hover:underline">Advertizing</p>
        <p className="cursor-pointer hover:underline">Buisness</p>
        <p className="cursor-pointer hover:underline">How Search works</p>
      </div>

      <div className="flex justify-center space-x-8 md:ml-auto">
        <p className="cursor-pointer hover:underline">Privacy</p>
        <p className="cursor-pointer hover:underline">Terms</p>
        <p className="cursor-pointer hover:underline">Settings</p>
      </div>
    </footer>
  );
};

export default Footer;
