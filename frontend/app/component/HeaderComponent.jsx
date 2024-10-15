"use client";

import { useRouter,usePathname   } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // Hamburger Icon
import { IoClose } from "react-icons/io5"; // Close Icon
import { GoHome } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { VscArchive } from "react-icons/vsc";
import { MdOutlineReviews } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence for exit animations

function HeaderComponent() {
  // const router = useRouter();
  const pathName=usePathname()
  const [isOpen, setIsOpen] = useState(false);
  const [isHold, setIsHold] = useState(false);

  console.log(pathName, "routerrrr");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setIsHold(true);
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsHold(false);
    }, 1000);
  };

  return (
    <header className="flex justify-center bg-white py-4">
      <div className="flex flex-col w-full md:w-full lg:w-full xl:w-11/12 2xl:w-4/6 px-4 md:px-3">
        {/* Row 1: Toggle Button & Logo */}
        <div className="flex justify-between items-center w-full lg:flex-row">
          <div className="flex items-center justify-between w-8/12 sm:w-7/12 lg:w-1/6 ">
            {/* Hamburger Icon for small screens */}
            <div className="lg:hidden w-2/6">
              <button
                className="text-3xl focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
            <Link href="/">
              <img
                src="/compLogo.png"
                alt="Company logo: Your Brand Name"
                className="h-16 lg:h-20"
              />
            </Link>
          </div>
          <div className="hidden lg:block w-2/6 mt-4 lg:mt-0 lg:items-center bg-gray-100">
            <form
              className="flex w-full"
              role="search"
              aria-label="Search products"
            >
              <label htmlFor="search-input" className="sr-only">
                Search for products, brands, and more
              </label>
              <input
                type="text"
                id="search-input"
                placeholder="Search for products, brands, and more"
                className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-red-400"
                aria-label="Search input"
              />
              <button
                type="submit"
                className="p-2 bg-red-500 text-white rounded-r-md hover:bg-red-600"
                aria-label="Submit search"
              >
                <CiSearch className="w-6 h-6" />
              </button>
            </form>
          </div>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:w-2/5 mt-4 lg:mt-0 lg:items-center`}
          >
            <ul className="flex flex-col lg:flex-row justify-center font-medium space-y-4 lg:space-y-0 lg:space-x-6">
              {/* Home */}
              <li className="text-center lg:text-left hidden lg:block">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center justify-center lg:justify-start text-gray-700 hover:text-red-500"
                >
                  <GoHome className="h-5 w-5 mr-1" /> Home
                </Link>
              </li>

              {/* Products */}
              <li className="text-center lg:text-left hidden lg:block">
                <Link
                  href="/products"
                  onClick={closeMenu}
                  className="flex items-center justify-center lg:justify-start text-gray-700 hover:text-red-500"
                >
                  <AiOutlineProduct className="h-5 w-5 mr-1" /> Products
                </Link>
              </li>

              {/* Testimonials */}
              <li className="text-center lg:text-left hidden lg:block">
                <Link
                  href="/testimonials"
                  onClick={closeMenu}
                  className="flex items-center justify-center lg:justify-start text-gray-700 hover:text-red-500"
                >
                  <MdOutlineReviews className="h-5 w-5 mr-1" /> Testimonials
                </Link>
              </li>

              {/* Contact Us */}
              <li className="text-center lg:text-left hidden lg:block">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center lg:justify-start text-gray-700 hover:text-red-500"
                >
                  <CiUser className="h-5 w-5 mr-1" /> Contact us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Fullscreen Menu for Mobile Screens */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-50 bg-white transition-transform transform lg:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.9216619069502801) 0%, rgba(65,9,15,0.9479924391631652) 100%)",
                }}
              >
                {/* Close Icon */}
                <div className="flex justify-end items-center p-4 text-gray-200">
                  <button
                    className="text-3xl flex items-center"
                    onClick={toggleMenu}
                  >
                    <IoClose />
                    <span className="text-sm font-semibold">CLOSE</span>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav
                  className="p-4 flex flex-col justify-between h-full pb-16 text-xl font-semibold "
                  style={{ fontFamily: "Mukta, sans-serif" }}
                >
                  <ul className="flex flex-col space-y-6 text-gray-400 flex-grow justify-center items-end">
                    <motion.li
                      initial={{ x: -900, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 900, opacity: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <Link
                        href="/"
                        onClick={closeMenu}
                        className={`flex items-center hover:text-red-500 ${pathName=='/'?'text-white font-bold':''}
                      `}
                      >
                        HOME
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{ x: -900, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 900, opacity: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      <Link
                        href="/products"
                        onClick={closeMenu}
                        className={`flex items-center hover:text-red-500 ${pathName=='/products'?'text-white font-bold':''}`}
                      >
                        PRODUCTS
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{ x: -900, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 900, opacity: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <Link
                        href="/testimonials"
                        onClick={closeMenu}
                        className={`flex items-center hover:text-red-500 ${pathName=='/testimonials'?'text-white font-bold':''}`}
                      >
                        TESTIMONIALS
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{ x: -900, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 900, opacity: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <Link
                        href="/contact"
                        onClick={closeMenu}
                        className={`flex items-center hover:text-red-500 ${pathName=='/contact'?'text-white font-bold':''}`}
                      >
                        CONTACT US
                      </Link>
                    </motion.li>
                  </ul>

                  {/* Social Media Icons */}
                  <div className="flex justify-center items-center space-x-6 mb-8">
                    <Link href="https://facebook.com">
                      <FaFacebook className="w-5 h-6 text-gray-300" />
                    </Link>
                    <Link href="https://instagram.com">
                      <AiFillInstagram className="w-5 h-6 text-gray-300" />
                    </Link>
                    <Link href="https://youtube.com">
                      <FaYoutube className="w-5 h-6 text-gray-300" />
                    </Link>
                    <Link href="https://linkedin.com">
                      <FaLinkedin className="w-5 h-6 text-gray-300" />
                    </Link>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Row 2: Search Box */}
        <div className="block lg:hidden w-full mt-4 lg:mt-0 lg:items-center">
          <form
            className="flex w-full"
            role="search"
            aria-label="Search products"
          >
            <label htmlFor="search-input" className="sr-only">
              Search for products, brands, and more
            </label>
            <div className="relative w-full">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />{" "}
              {/* Search icon */}
              <input
                type="text"
                id="search-input"
                placeholder="Search for products, brands, and more"
                className="pl-10 pr-2 w-full py-2 rounded-md focus:outline-none bg-neutral-100 focus:border-red-400"
                aria-label="Search input"
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
