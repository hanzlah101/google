import { FC, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import GoogleIMg from "../public/assets/google.png";
import Form from "./Form";
import { IoIosKeypad } from "react-icons/io";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { TbPhoto } from "react-icons/tb";

interface HeaderProps {
  query?: any;
}

const Header: FC<HeaderProps> = ({ query }) => {
  const [search, setSearch] = useState(query);

  return (
    <header className="sticky top-0 left-0 bg-white h-full w-full flex flex-col">
      <div className="flex items-center justify-between py-6 px-4 md:gap-4">
        <div className="flex items-center md:gap-12 gap-6 w-full lg:max-w-[60%]">
          <Link href={"/"}>
            <Image src={GoogleIMg} alt="google_logo" className="w-28" />
          </Link>

          <Form search={search} setSearch={setSearch} />
        </div>

        <div className="items-center gap-4 md:flex hidden">
          <button className="p-2 hover:bg-gray-100 text-gray-600 rounded-full">
            <IoSettingsOutline size={25} />
          </button>

          <button className="p-2 hover:bg-gray-100 text-2xl text-gray-600 rounded-full">
            <IoIosKeypad />
          </button>

          <button className="btn2 w-20">Sign in</button>
        </div>
      </div>

      <div className="mt-4 w-full border-b px-3 sm:pl-[5%] md:pl-[11%]">
        <div className="flex items-center gap-1 px-1 cursor-pointer border-b-[3px] w-fit border-primary text-primary">
          <IoIosSearch size={16} />
          All
        </div>
      </div>
    </header>
  );
};

export default Header;
