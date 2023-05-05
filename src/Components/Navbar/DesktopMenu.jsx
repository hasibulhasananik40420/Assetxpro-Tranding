import { Link } from "react-router-dom";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

function DesktopMenu({ setSidebar }) {
  return (
    <div className="lg:block hidden">
      {/************************ desktop menu start here *************************/}
      <ul className="flex gap-12 items-center">
        <li className="relative hover:text-blue-300">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li className="relative hover:text-blue-300">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/"}
          >
            TRADING
          </Link>
        </li>
        <li className="relative hover:text-blue-300">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/"}
          >
          PRODUCTS
          </Link>
        </li>
        <li className="relative hover:text-blue-300">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/"}
          >
           ABOUT US
          </Link>
        </li>
        <li className="relative hover:text-blue-300">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/"}
          >
           FAQ
          </Link>
        </li>
 <li className="relative hover:text-blue-300">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/"}
          >
          COMPLIANCE
          </Link>
        </li>
 <li className="relative hover:text-blue-300">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/"}
          >
          CONTACT US
          </Link>
        </li>

        <li
         
          className="bg-[#fefffe0f] w-12 h-12 flex justify-center cursor-pointer items-center rounded-full hover:bg-[#3657CD] duration-300"
        >
          <h1 className="text-red-500 text-3xl"><IoIosAdd/></h1>
        </li>
      </ul>

      {/************************ desktop menu end here *************************/}
    </div>
  );
}

export default DesktopMenu;
