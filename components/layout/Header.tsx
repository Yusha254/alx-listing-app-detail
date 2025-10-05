// components/layout/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { LOGO_DARK } from "@/constants/index";
import { FiSearch, FiUser } from "react-icons/fi";
import { GoBriefcase } from "react-icons/go";
import { PiCouch } from "react-icons/pi";
import { HiBuildingLibrary } from "react-icons/hi2";
import { GiTreeBranch, GiPalmTree, GiHouseKeys, GiIsland, GiCampingTent, GiTreehouse, GiWoodCabin, GiCastle } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSwimmingPool, FaRegBuilding } from "react-icons/fa";
import { TbBeach } from "react-icons/tb";
import { IoHomeOutline, IoFishOutline } from "react-icons/io5";
import { PiFarmDuotone } from "react-icons/pi";
import { useRef, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import Button from "@/components/common/Button";


const iconSize = 28; 

const accommodationTypes = [
  { title: "Rooms", icon: <PiCouch size={iconSize} /> },
  { title: "Mansions", icon: <HiBuildingLibrary size={iconSize} /> },
  { title: "Countryside", icon: <GiTreeBranch size={iconSize} /> },
  { title: "Villas", icon: <MdOutlineVilla size={iconSize} /> },
  { title: "Tropical", icon: <GiPalmTree size={iconSize} /> },
  { title: "New", icon: <GiHouseKeys size={iconSize} /> },
  { title: "Amazing Pool", icon: <FaSwimmingPool size={iconSize} /> },
  { title: "Beach House", icon: <TbBeach size={iconSize} /> },
  { title: "Island", icon: <GiIsland size={iconSize} /> },
  { title: "Camping", icon: <GiCampingTent size={iconSize} /> },
  { title: "Apartments", icon: <FaRegBuilding size={iconSize} /> },
  { title: "House", icon: <IoHomeOutline size={iconSize} /> },
  { title: "Lakefront", icon: <IoFishOutline size={iconSize} /> },
  { title: "Farm House", icon: <PiFarmDuotone size={iconSize} /> },
  { title: "Treehouse", icon: <GiTreehouse size={iconSize} /> },
  { title: "Cabins", icon: <GiWoodCabin size={iconSize} /> },
  { title: "Castles", icon: <GiCastle size={iconSize} /> },
];


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLUListElement>(null);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <header className="w-full shadow-md">
      {/* Top Banner */}
      <div className="bg-[#34967c] text-white text-sm py-1 px-4 flex justify-center items-center space-x-2">
        <GoBriefcase className="text-lg" />
        <span>Overseas trip? Get the latest information on travel guides</span>
        <Button variant="info">More info</Button>
      </div>

      {/* Main Header */}
      <div className="grid grid-cols-3 items-center px-6 py-2 bg-white">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#151117]">
          <Link href="/">
            <Image
                src={LOGO_DARK}
                alt="alx"
                width={40}
                height={20}
                priority
            />
          </Link>
        </h1>

        {/* Search */}
        <div className="flex justify-center">
          {/* Desktop / Tablet Search */}
          <div className="hidden md:flex items-center border rounded-full px-2 py-1 w-full max-w-3xl divide-x">
            {/* Location */}
            <div className="px-6">
              <label className="block text-xs font-medium text-gray-500">
                Location
              </label>
              <input
                type="text"
                placeholder="Search destination"
                className="w-full outline-none text-xs"
              />
            </div>

            {/* Check-in */}
            <div className="px-1">
              <label className="block text-xs font-medium text-gray-500">
                Check in
              </label>
              <input
                type="text"
                placeholder="Add date"
                className="w-full outline-none text-xs"
              />
            </div>

            {/* Check-out */}
            <div className="px-1">
              <label className="block text-xs font-medium text-gray-500">
                Check out
              </label>
              <input
                type="text"
                placeholder="Add date"
                className="w-full outline-none text-xs"
              />
            </div>

            {/* People */}
            <div className="px-1">
              <label className="block text-xs font-medium text-gray-500">
                People
              </label>
              <input
                type="text"
                placeholder="Add guests"
                className="w-full outline-none text-xs"
              />
            </div>

            {/* Search Button */}
            <div className="pl-3">
              <Button variant="search" icon={<FiSearch />} />
            </div>
          </div>

          {/* Mobile Search */}
          <div className="flex md:hidden flex-col w-full max-w-sm border rounded-full px-4 py-2">
            <span className="text-xs font-medium text-gray-500">Where to?</span>
            <span className="text-sm text-gray-700 truncate">
              Location · Date · Add guest
            </span>
            <div className="flex justify-end mt-1">
              <Button variant="search" icon={<FiSearch />} />
            </div>
          </div>
        </div>

        {/* Right-side actions */}
        <div className="flex justify-end items-center space-x-3">
          {/* Desktop buttons */}
          <div className="hidden md:flex space-x-3">
            <Button variant="primary">Sign In</Button>
            <Button variant="secondary">Sign Up</Button>
          </div>

          {/* Mobile profile menu */}
          <div className="md:hidden relative">
            <Button
              variant="profile"
              icon={<FiUser />}
              onClick={() => setMenuOpen((prev) => !prev)}
            />
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Sign In
                </button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className="bg-gray-100 py-2 px-6 relative">
        <div className="flex items-center relative">
            {/* Left button */}
            <button
                onClick={() => {
                    const container = document.getElementById("accommodation-scroll");
                    container?.scrollBy({ left: -120, behavior: "smooth" });
                }}
                className="absolute left-0 z-10 p-1 bg-white rounded-full shadow hidden md:flex"
            >
        ‹
            </button>

            {/* Scrollable container */}
            <ul
                id="accommodation-scroll"
                className="flex space-x-6 text-sm font-medium text-gray-700 overflow-x-hidden w-full justify-center"
            >
      {accommodationTypes.map((item, index) => (
        <li
          key={index}
          className="flex flex-col items-center min-w-[80px] cursor-pointer hover:text-[#34967c] text-sm"
        >
          {item.icon}
          <span className="mt-1 text-xs">{item.title}</span>
        </li>
      ))}
    </ul>

    {/* Right button */}
    <button
      onClick={() => {
        const container = document.getElementById("accommodation-scroll");
        container?.scrollBy({ left: 120, behavior: "smooth" });
      }}
      className="absolute right-0 z-10 p-1 bg-white rounded-full shadow hidden md:flex"
    >
      ›
    </button>
  </div>
</nav>


    </header>
  );
};

export default Header;
