"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // Hamburger Icon
import { IoClose } from "react-icons/io5"; // Close Icon
import { RiHome4Line } from "react-icons/ri";
import { VscArchive } from "react-icons/vsc";
import { MdOutlineReviews } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false); // Manage the state for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex justify-center bg-white  py-4 ">
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
            <img
              src="/compLogo.png"
              alt="Company logo: Your Brand Name"
              className="h-16 lg:h-20"
            />
          </div>
          <div className="hidden lg:block w-2/6 mt-4 lg:mt-0  lg:items-center bg-gray-100 ">
            <form className="flex w-full" role="search" aria-label="Search products">
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
              <li className="text-center lg:text-left">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center justify-center lg:justify-start text-gray-700 hover:text-red-500"
                >
                  <RiHome4Line className="h-5 w-5 mr-1" /> Home
                </Link>
              </li>

              {/* Products */}
              <li className="text-center lg:text-left">
                <Link
                  href="/products"
                  onClick={closeMenu}
                  className="flex items-center justify-center lg:justify-start text-gray-700 hover:text-red-500"
                >
                  <VscArchive className="h-5 w-5 mr-1" /> Products
                </Link>
              </li>

              {/* Testimonials */}
              <li className="text-center lg:text-left">
                <Link
                  href="/testimonials"
                  onClick={closeMenu}
                  className="flex items-center justify-center lg:justify-start text-gray-700 hover:text-red-500"
                >
                  <MdOutlineReviews className="h-5 w-5 mr-1" /> Testimonials
                </Link>
              </li>

              {/* Contact Us */}
              <li className="text-center lg:text-left">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center lg:justify-start text-gray-700 hover:text-red-500"
                >
                  <IoIosContact className="h-5 w-5 mr-1" /> Contact us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Fullscreen Menu for Mobile Screens */}
          <div
            className={`fixed inset-0 z-50 bg-white transition-transform transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden`}
          >
            {/* Close Icon */}
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-xl font-semibold">Menu</span>
              <button className="text-3xl" onClick={toggleMenu}>
                <IoClose />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center    hover:text-red-500"
                >
                  <RiHome4Line className="h-5 w-5 mr-1" /> Home
                </Link>
                </li>
                <li>
                <Link
                  href="/products"
                  onClick={closeMenu}
                  className="flex items-center  hover:text-red-500"
                >
                  <VscArchive className="h-5 w-5 mr-1" /> Products
                </Link>
                </li>
                <li>
                <Link
                  href="/testimonials"
                  onClick={closeMenu}
                  className="flex items-center  hover:text-red-500"
                >
                  <MdOutlineReviews className="h-5 w-5 mr-1" /> Testimonials
                </Link>
                </li>
                <li>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center  hover:text-red-500"
                >
                  <IoIosContact className="h-5 w-5 mr-1" /> Contact us
                </Link>
                </li>
              </ul>

              {/* Social Media Icons */}
              <div className="flex justify-center mt-16 space-x-6">
                <Link href="/facebook">
                <FaFacebook className="w-5 h-6 text-gray-400"/>
                </Link>
                <Link href="/instagram">
                <AiFillInstagram className="w-5 h-6 text-gray-400"/>
                </Link>
                <Link href="/youtube">
                <FaYoutube className="w-5 h-6 text-gray-400"/>
                </Link>
                <Link href="/linkedin">
                <FaLinkedin className="w-5 h-6 text-gray-400"/>
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Row 2: Search Box */}
        <div className="block lg:hidden w-full mt-4 lg:mt-0 lg:items-center">
          <form className="flex w-full" role="search" aria-label="Search products">
            <label htmlFor="search-input" className="sr-only">
              Search for products, brands, and more
            </label>
            <input
              type="text"
              id="search-input"
              placeholder="Search for products, brands, and more"
              className="w-full p-2 rounded-l-md focus:outline-none bg-neutral-100 focus:border-red-400"
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
      </div>
    </header>
  );
}

export default HeaderComponent;
