import React, { useState } from "react";
import logo from "../images/logo.webp";
import bgimg from "../images/background.jpg";
import { RiArrowDownSLine } from "react-icons/ri";
import Search from "./Search";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null); // State for hovered menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  return (
    <>
      <div
        className="flex "
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderBottom: "1px solid #a78058",
          height: "10rem",
        }}
      >
        <div className="container mx-auto relative z-10 item-end w-full md:w-[65rem]">
          <div className="flex items-start justify-between pt-5">
            {/* Logo Section */}
            <div className="flex-1 pt-2">
              <a href="#home">
                <img src={logo} alt="Logo" className="w-[250px]" />
              </a>
            </div>

            {/* Hamburger menu for mobile */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white text-2xl"
              >
                {isMobileMenuOpen ? "X" : "☰"}
              </button>
            </div>

            {/* Menu Section */}
            <div className={`flex gap-10 md:flex-row flex-col md:gap-7 ${isMobileMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col gap-20 justify-end items-end">
                <div className="text-darkcoffy flex gap-4 font-[100] line-clamp-3">
                  {" "}
                  <a>Gift Certificates </a>| <a>Login or Sign Up</a>
                </div>
                <div className="flex gap-7">
                  {/* CHOCOLATE */}
                  <div
                    onMouseEnter={() => setHoveredMenu("CHOCOLATE")}
                    onMouseLeave={() => setHoveredMenu(null)}
                    className="relative"
                  >
                    <a
                      href="#home"
                      className="font-normal text-brand no-underline text-lg flex items-center gap-2"
                    >
                      CHOCOLATE
                      <RiArrowDownSLine />
                    </a>
                    {hoveredMenu === "CHOCOLATE" && (
                      <div className="absolute left-1/2 top-9 transform -translate-x-1/2 flex items-start justify-around rounded-lg gap-10 w-[80rem] bg-white shadow-lg p-6">
                        {/* All Chocolate */}
                        <div>
                          <h3 className="text-xl  text-brand pb-4">
                            All Chocolate
                          </h3>
                          <hr />
                        </div>
                        <div className="flex flex-col gap-4">
                          <h3 className="text-xl text-brand">Milk Chocolate</h3>
                          <hr />
                          <ul className="space-y-2">
                            <li className="text-brand">Creamy Delight</li>
                            <li className="text-brand">Hazelnut Milk</li>
                            <li className="text-brand">Almond Milk</li>
                          </ul>
                        </div>

                        {/* White Chocolate */}
                        <div className="flex flex-col gap-4">
                          <h3 className="text-xl text-brand">
                            White Chocolate
                          </h3>
                          <hr />
                          <ul className="space-y-2">
                            <li className="text-brand">Vanilla Bean</li>
                            <li className="text-brand">Coconut White</li>
                            <li className="text-brand">Almond White</li>
                          </ul>
                        </div>

                        {/* Dark Chocolate */}
                        <div className="flex flex-col gap-4">
                          <h3 className="text-xl text-brand">Dark Chocolate</h3>
                          <hr />
                          <ul className="space-y-2">
                            <li className="text-brand">70% Cocoa</li>
                            <li className="text-brand">85% Cocoa</li>
                            <li className="text-brand">Sea Salt Dark</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* TRUFFLES */}
                  <div
                    onMouseEnter={() => setHoveredMenu("TRUFFLES")}
                    onMouseLeave={() => setHoveredMenu(null)}
                    className="relative"
                  >
                    <a
                      href="#about"
                      className="font-normal text-brand no-underline text-lg flex items-center gap-2"
                    >
                      TRUFFLES
                      <RiArrowDownSLine />
                    </a>
                    {hoveredMenu === "TRUFFLES" && (
                      <div className="absolute left-1/2 top-9 transform -translate-x-1/2 flex items-start justify-around rounded-lg gap-10 w-[80rem] bg-white shadow-lg p-6">
                        {/* All Chocolate */}
                        <div>
                          <h3 className="text-xl  text-brand pb-4">
                            All Chocolate
                          </h3>
                          <hr />
                        </div>
                        <div className="flex flex-col gap-4">
                          <h3 className="text-xl text-brand">Milk Chocolate</h3>
                          <hr />
                          <ul className="space-y-2">
                            <li className="text-brand">Creamy Delight</li>
                            <li className="text-brand">Hazelnut Milk</li>
                            <li className="text-brand">Almond Milk</li>
                          </ul>
                        </div>

                        {/* White Chocolate */}
                        <div className="flex flex-col gap-4">
                          <h3 className="text-xl text-brand">
                            White Chocolate
                          </h3>
                          <hr />
                          <ul className="space-y-2">
                            <li className="text-brand">Vanilla Bean</li>
                            <li className="text-brand">Coconut White</li>
                            <li className="text-brand">Almond White</li>
                          </ul>
                        </div>

                        {/* Dark Chocolate */}
                        <div className="flex flex-col gap-4">
                          <h3 className="text-xl text-brand">Dark Chocolate</h3>
                          <hr />
                          <ul className="space-y-2">
                            <li className="text-brand">70% Cocoa</li>
                            <li className="text-brand">85% Cocoa</li>
                            <li className="text-brand">Sea Salt Dark</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Other Menu Items */}
                  <a
                    href="#services"
                    className="font-normal text-brand no-underline text-lg"
                  >
                    BAKING
                  </a>
                  <a
                    href="#contact"
                    className="font-normal text-brand no-underline text-lg"
                  >
                    DARK TRUFFLES
                  </a>
                  <a
                    href="#contact"
                    className="font-normal text-brand no-underline text-lg"
                  >
                    MELTED
                  </a>
                  <a
                    href="#contact"
                    className="font-normal text-brand no-underline text-lg"
                  >
                    CREAM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Search />
    </>
  );
};

export default Navbar;
