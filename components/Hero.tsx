import { useState } from "react";
import Image from "next/image";
import GoogleIMg from "../public/assets/google.png";
import Form from "./Form";

const Hero = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center flex-col justify-center w-full h-full mt-6">
      <Image src={GoogleIMg} alt="google_logo" />
      <div className="w-full h-full flex items-center flex-col max-w-xl mt-6 gap-4">
        <Form search={search} setSearch={setSearch} />

        <div className="flex items-center gap-3 mt-3">
          <button className="btn">Google Search</button>
          <a
            href="https://www.google.com/doodles"
            className="btn"
            target="_blank"
          >
            I&apos;m Feeling Lucky
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
