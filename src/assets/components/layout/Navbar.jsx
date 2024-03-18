import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from "../../png/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    let Links = [
        { path: "/", name: "Home" },
        { path: "/product", name: "Product" },
        { path: "/contact", name: "Contact" },
    ]

    return (
        <div className=" shadow-md w-full" >
            <div className="md:px-10 px-7 md:flex justify-between items-center">
                {/* Logo */}
                <div className="flex cursor-pointer items-center">
                    <img
                        className="w-[100px]"
                        src={Logo} />
                </div>

                {/* Menu Icon */}
                <div
                    className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
                    onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }

                </div>

                {/* Nav Link */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, index) => {
                            return (
                                <li
                                    key={index}
                                    className="font-semibold my-7 md:my-0 md:ml-8  py-2 px-2 transition duration-0 md:duration-150 hover:md:scale-125">
                                    <Link to={link.path}>{link.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>

        </div >
    )
}


