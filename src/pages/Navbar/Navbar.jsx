import { useState } from "react";
import { IoMdArrowForward, IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { RiMenu3Fill } from "react-icons/ri";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = <>
        <NavLink to='/' className="text-center">Home</NavLink>
        <NavLink to='/' className="text-center">Why It Works</NavLink>
        <NavLink to='/' className="text-center">Features </NavLink>
        <NavLink to='/' className="text-center">How It Works </NavLink>
        <NavLink to='/' className="text-center">Testimonials</NavLink>
        <NavLink to='/' className="text-center">Before & After </NavLink>
        <NavLink to='/' className="text-center">Science</NavLink>
        <NavLink to='/' className="text-center">FAQs</NavLink>
        <NavLink to='/' className="text-center">Shop Bundles</NavLink>
    </>

    return (
        <div className="bg-PrimaryBg shadow-md md:shadow-none py-2 lg:py-3 relative z-50">
            <div className="w-[1230px] mx-auto px-2 flex justify-between items-center">
                <NavLink to={'/'}>

                    <img src={logo} alt="" />
                </NavLink>

                <div className="flex-1 flex justify-center">
                    <div className={`lg:flex gap-8 lg:static absolute duration-300 ease-in-out ${open ? 'top-16' : 'top-[-200px]'} right-0 lg:right-auto lg:bg-transparent py-5 md:py-5 lg:py-0 bg-PrimaryBg w-full`}>

                        <div className="flex flex-col lg:flex-row gap-3 md:gap-4  items-center justify-center text-base font-normal w-full">
                            {links}
                        </div>

                        {open && (
                            <div className="flex gap-4 items-center justify-center mt-4 lg:hidden">
                                <div className="text-3xl">
                                    <RiShoppingBagLine />
                                </div>
                                <button className="text-white  text-base bg-[#F60]  px-7 py-2 rounded-full items-center gap-2">
                                    Contact Us <IoMdArrowForward />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="hidden lg:flex items-center justify-between gap-10">
                    <button className="flex items-center justify-between  text-white  text-base bg-[#F60]  px-7 py-2 rounded-full gap-2">
                        Contact Us <IoMdArrowForward />
                    </button>
                </div>

                <div className="text-4xl lg:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <IoMdClose /> : <RiMenu3Fill />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;