import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { TiFlag } from "react-icons/ti";
import Logo from "../../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  let Links = [
    { path: "/", name: "Home" },
    { path: "/product", name: "Product" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <div className="my-5 shadow-md w-11/12 bg-black rounded-3xl border-slate-300 border-[0.1rem] absolute ">
      <div className="px-6 pb-3  md:flex justify-between items-center ">
        {/* Logo */}
        <div className="flex cursor-pointer items-center">
          <img className="w-[3.5rem]" src={Logo} />
        </div>

        {/* Menu Icon */}
        <div
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon color="white" />
          ) : (
            <Bars3BottomRightIcon color="white" />
          )}
        </div>

        {/* Nav Link */}
        <ul
          className={`md:flex md:items-center pt-3 absolute md:static  text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? " top-[6.3rem]" : "top-[-490px]"
          }`}>
          <div className="flex rounded-xl border-slate-300 border-[0.1rem] p-2 justify-center items-center">
            <TiFlag />
            TH
          </div>
          {Links.map((link, index) => {
            return (
              <li
                key={index}
                className="font-semibold my-7 md:my-0 md:ml-8 py-2 px-2 transition duration-0 md:duration-150 hover:md:scale-125">
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
